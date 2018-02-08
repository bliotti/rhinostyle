import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, Icon } from '../components';

const Close = (props) => {
  const { className, onClick, ...opts } = props;
  const classes = cx('close', className);

  return (
    <Button reset className={classes} onClick={onClick} {...opts} aria-label="Close">
      <Icon icon="close" />
    </Button>
  );
};

Close.displayName = 'RhinoClose';

Close.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Close.defaultProps = {
  onClick:  () => {},
};

export default Close;
