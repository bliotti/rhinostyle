import PropTypes from 'prop-types';
import React from 'react';
import {
  Icon,
} from '.';

const SmartTableHeader = (props) => {
  const activeCaretClassName = 'u-text-body';
  const { headerName, ascending, isActive, sortKey, customHeaderSort } = props;
  const caretUpClass = isActive && ascending === 1 ? activeCaretClassName : ''; // ascending
  const caretDownClass = isActive && ascending === -1 ? activeCaretClassName : ''; // descending

  return (
    <div className="u-flex u-p-a-small" onClick={() => customHeaderSort(sortKey)}>
      {headerName}
      <span className="u-flex u-flex-direction-column">
        <Icon icon="caret-up" className={caretUpClass} />
        <Icon icon="caret-down" className={caretDownClass} />
      </span>
    </div>
  );
};

SmartTableHeader.propTypes = {
  headerName: PropTypes.string,
  sortKey: PropTypes.string,
  ascending: PropTypes.number,
  customHeaderSort: PropTypes.func,
  isActive: PropTypes.bool,
};

export default SmartTableHeader;
