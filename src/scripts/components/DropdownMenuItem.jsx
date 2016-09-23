import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router';
import Avatar from './Avatar';
import Icon from './Icon';

function customValidator(props, propName, componentName) {
  if (props.icon && props.avatar) {
    return new Error(`Only one of \`avatar\` or \`icon\` can be supplied to \`${componentName}\`.`);
  } else if (props[propName]) {
    if (typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${props[propName]}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected \`string\`.`);
    }
  }
  return null;
}

class DropdownMenuItem extends React.Component {
  static displayName = 'RhinoDropdownMenuItem';

  static propTypes = {
    active:      React.PropTypes.bool,
    avatar:      customValidator,
    blankWindow: React.PropTypes.bool,
    onClick:     React.PropTypes.func,
    className:   React.PropTypes.string,
    disabled:    React.PropTypes.bool,
    icon:        customValidator,
    label:       React.PropTypes.string.isRequired,
    labelDesc:   React.PropTypes.string,
    route:       React.PropTypes.string,
    url:         React.PropTypes.string,
  };

  static defaultProps = {
    active:    false,
    onClick:   () => {},
    disabled:  false,
    newWindow: false,
  };

  handleClick = () => {
    let returnVal = null;
    if (this.props.url) {
      if (!this.props.blankWindow) {
        window.location = this.props.url;
      } else {
        window.open(this.props.url);
      }
      returnVal = null;
    } else {
      returnVal = this.props.onClick();
    }
    return returnVal;
  }

  render() {
    const { active, avatar, className, disabled, icon, label, labelDesc, route } = this.props;
    const classes = cx('dropdown__menu__item', className, {
      'active': active, //eslint-disable-line
      'disabled': disabled, //eslint-disable-line
    });

    let markup = '';

    if (route) {
      markup = (
        <li className={classes}>
          <Link to={route} className="dropdown__menu__item__link" onClick={this.handleClick}>
            <div className="dropdown__menu__item__link__label">
              {icon ? (<Icon icon={icon} className="u-m-r-sm" />) : null}
              {avatar ? (<Avatar size="small" type="member" image={avatar} className="u-m-r-sm" />) : null}
              <span className="u-text-overflow">{label}</span>
            </div>
            {labelDesc ? (<div className="dropdown__menu__item__link__desc">{labelDesc}</div>) : null}
          </Link>
        </li>
      );
    } else {
      markup = (
        <li className={classes}>
          <a href="javascript:void(0)" className="dropdown__menu__item__link" onClick={this.handleClick}>
            <div className="dropdown__menu__item__link__label">
              {icon ? (<Icon icon={icon} className="u-m-r-sm" />) : null}
              {avatar ? (<Avatar size="small" type="member" image={avatar} className="u-m-r-sm" />) : null}
              <span className="u-text-overflow">{label}</span>
            </div>
            {labelDesc ? (<div className="dropdown__menu__item__link__desc">{labelDesc}</div>) : null}
          </a>
        </li>
      );
    }

    return markup;
  }
}

export default DropdownMenuItem;
