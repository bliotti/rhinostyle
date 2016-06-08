import React from 'react';
import classNames from 'classnames';

class Dropdown extends React.Component {
  static displayName = 'RhinoDropdown';

  static propTypes = {
    children:  React.PropTypes.node,
    block:    React.PropTypes.bool,
    classes:  React.PropTypes.string,
    click:    React.PropTypes.func,
    disabled: React.PropTypes.bool,
    iconOnly: React.PropTypes.bool,
    outline:  React.PropTypes.bool,
    size:     React.PropTypes.oneOf(['small', 'normal', 'large']),
    type:     React.PropTypes.oneOf(['default', 'primary', 'secondary', 'accent', 'link']),
  };

  static defaultProps = {
    block:    false,
    click:    () => {},
    disabled: false,
    iconOnly: false,
    outline:  false,
    size:     'normal',
    type:     'default',
  };

  render() {
    // const { block, classes, click, disabled, iconOnly, outline, size, type, ...props } = this.props;
    // const cx = classNames('btn', classes, {
    //   'btn--default':   (type === 'default' && !outline),
    //   'btn--primary':   (type === 'primary' && !outline),
    //   'btn--secondary': (type === 'secondary' && !outline),
    //   'btn--accent':    (type === 'accent' && !outline),
    //   'btn--link':      (type === 'link' && !outline),
    //   'btn--default-outline':   (type === 'default' && outline),
    //   'btn--primary-outline':   (type === 'primary' && outline),
    //   'btn--secondary-outline': (type === 'secondary' && outline),
    //   'btn--accent-outline':    (type === 'accent' && outline),
    //   'btn--sm': size === 'small',
    //   'btn--lg': size === 'large',
    //   'btn--block': block,
    //   'btn--icon': iconOnly,
    //   'disabled': disabled, //eslint-disable-line
    // });

    return (
      <div className="dropdown">
        <a href="#" className="btn btn--default dropdown__toggle" type="button" data-toggle="dropdown">
          <span className="u-text-overflow">Dropdown</span><svg className="dropdown__toggle__icon"><use xlinkHref="#icon-chevron-down" /></svg>
        </a>
        {this.props.children}
      </div>
    );
  }
}

export default Dropdown;
