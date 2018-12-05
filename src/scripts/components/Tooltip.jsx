/* global Modernizr */
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { TimelineMax } from 'gsap/TweenMax';

import { UtilitySystem } from '../UtilitySystem';

class Tooltip extends React.Component {
  state = { isTooltipOpen: false };

  /**
   * @NOTE Attaching event listeners here is not ideal,
   * but `onMouseEnter` (and `onMouseOver`) is not reliably fired;
   * as well as the context of the currentTarget being incorrect.
   * */
  componentDidMount() {
    const tooltipTrigger = this.getTooltipTrigger();

    // Add event listeners
    // Tooltips are not triggered on touch-devices to not interfere with actionable items
    if (!Modernizr.touchevents) {
      tooltipTrigger.addEventListener('mouseenter', this.createTooltip.bind(this));
      tooltipTrigger.addEventListener('mouseleave', this.closeTooltip.bind(this));
    }
    if (Modernizr.touchevents || Modernizr.pointerevents) {
      tooltipTrigger.addEventListener('click', this.toggleTooltip.bind(this));
    }
  }

  componentWillUnmount() {
    const tooltipTrigger = this.getTooltipTrigger();

    // Remove event listeners from non-touch devices
    if (!Modernizr.touchevents) {
      tooltipTrigger.removeEventListener('mouseenter', this.createTooltip.bind(this));
      tooltipTrigger.removeEventListener('mouseleave', this.closeTooltip.bind(this));
    }
  }

  /**
   * Get tooltip trigger
   * @return {HTMLElement} DOM Node where tooltip originates
   */
  getTooltipTrigger = () => {
    const { tooltipTrigger } = this;

    // If this a React component; get DOM reference
    if (typeof this.tooltipTrigger === 'object') {
      return ReactDOM.findDOMNode(this.tooltipTrigger);
    }

    return tooltipTrigger;
  }

  /**
   * Create tooltip
   * @param {MouseEvent} e mouse enter event
   * @return {void}
   */
  createTooltip = (e) => {
    if (this.touchOpen) {
      return;
    }
    this.touchOpen = true;
    e.preventDefault();
    // Random ID
    this.tooltipId = `tooltip-${UtilitySystem.generateUUID()}`;
    console.log('CREATED TOOLTIP', this.state.isTooltipOpen);
    const $tooltip = document.createElement('div');
    const $tooltipContent = document.createElement('div');

    $tooltip.setAttribute('id', this.tooltipId);
    $tooltip.setAttribute('role', 'tooltip');
    $tooltip.classList.add('tooltip');

    $tooltipContent.classList.add('tooltip-inner', `tooltip-inner--${this.props.type}`);

    const tooltipContent = this.props.content;

    // If tooltip content is valid HTMl (wrapped in object), convert to HTML and inject
    $tooltipContent.innerHTML = typeof tooltipContent === 'object' ? ReactDOMServer.renderToStaticMarkup(tooltipContent) : tooltipContent;

    $tooltip.appendChild($tooltipContent);
    // Set placement as parameter
    $tooltip.placement = this.props.placement;

    document.body.appendChild($tooltip);

    // Attach GSAP
    $tooltip.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        this.touchOpen = true;
        this.setState({ isTooltipOpen: true });
      },
      onReverseComplete: () => {
        this.touchOpen = false;
        this.removeTooltip($tooltip);
        this.setState({ isTooltipOpen: false });
      },
    });

    let transformOrigin;

    switch ($tooltip.placement) { // eslint-disable-line default-case
      case 'top':
        transformOrigin = 'center bottom';
        break;
      case 'bottom':
        transformOrigin = 'center top';
        break;
      case 'left':
        transformOrigin = 'right center';
        break;
      case 'right':
        transformOrigin = 'left center';
        break;
    }

    $tooltip.timeline.set($tooltip, {
      transformOrigin,
      scale: 0.75,
    })
      .to($tooltip, 0.175, {
        css: {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
        },
        ease: UtilitySystem.config.easingBounce,
      });

    this.styleTooltip($tooltip);
  }

  /**
   * Figure out direction and position
   * @param {HTMLElement} tooltip Div element for tooltip
   * @return {void}
   */
  styleTooltip = (tooltip) => {
    const $tooltip = tooltip;
    const tooltipTrigger = this.getTooltipTrigger();

    const rect = tooltipTrigger.getBoundingClientRect();

    $tooltip.classList.add(`tooltip--${$tooltip.placement}`);

    // Grab dimensions of link
    const linkDim = { w: rect.width, h: rect.height };

    // Tooltip dimensions
    const tooltipDim = { w: $tooltip.offsetWidth, h: $tooltip.offsetHeight };

    const scrollYOffset = window.pageYOffset || document.documentElement.scrollTop;
    const scrollXOffset = window.pageXOffset || document.documentElement.scrollLeft;

    // Apply styling
    switch ($tooltip.placement) { // eslint-disable-line default-case
      case 'top':
        $tooltip.style.top = `${(rect.top + scrollYOffset) - tooltipDim.h}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset + (linkDim.w / 2)) - (tooltipDim.w / 2)}px`;
        break;
      case 'bottom':
        $tooltip.style.top = `${(rect.top + scrollYOffset) + linkDim.h}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset + (linkDim.w / 2)) - (tooltipDim.w / 2)}px`;
        break;
      case 'left':
        $tooltip.style.top = `${(rect.top + scrollYOffset + (linkDim.h / 2)) - (tooltipDim.h / 2)}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset) - tooltipDim.w}px`;
        break;
      case 'right':
        $tooltip.style.top = `${(rect.top + scrollYOffset + (linkDim.h / 2)) - (tooltipDim.h / 2)}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset + linkDim.w}px`;
        break;
    }

    this.openTooltip($tooltip);
  }

  /**
   * Open tooltip
   * @param  {HTMLElement} tooltip The DOM node where tooltip originates
   * @return {void}
   */
  openTooltip(tooltip) {
    const { delay } = this.props;

    if (delay) {
      // Takes care of multiple PropTypes
      const delayDuration = Number.isInteger(delay) ? delay : 1000;

      setTimeout(() => {
        tooltip.timeline.play();
      }, delayDuration);
    } else {
      tooltip.timeline.play();
    }
  }

  /**
   * Close tooltip
   * @return {void}
   */
  closeTooltip() {
    console.log('CLOSED TOOLTIP', this.state.isTooltipOpen);
    this.touchOpen = false;
    document.querySelector(`#${this.tooltipId}`).timeline.reverse();
  }

  /**
   * Remove tooltip from DOM
   * @param {HTMLElement} tooltip DOM node where tooltip originates.
   * @return {void}
   */
  removeTooltip(tooltip) {
    if (!this.touchOpen) {
      return;
    }

    tooltip.remove();
  }

  renderChildren = () => {
    const { children } = this.props;

    const returnChild = React.cloneElement(React.Children.only(children), {
      ref: (node) => {
        this.tooltipTrigger = node;
      },
    });

    return returnChild;
  };

  toggleTooltip(e) {
    if (!this.state.isTooltipOpen) {
      this.createTooltip(e);
    } else {
      this.closeTooltip(e);
    }
  }

  render() {
    return React.Children.only(this.renderChildren());
  }
}

Tooltip.propTypes = {
  delay: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.number.isRequired,
  ]),
  children: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  type: PropTypes.oneOf(['light', 'dark']),
};

Tooltip.defaultProps = {
  delay: false,
  placement: 'top',
  type: 'light',
};

export default Tooltip;
