// first component
import React, { memo, useEffect, useState } from 'react';
import './top-loading-bar.module.scss';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import LoadingBar from 'react-top-loading-bar';
import { useSelector } from 'react-redux';

const TopLoadingBar = (props) => {
  const [progressNum, setProgressNum] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    setProgressNum(props.progress);
  }, [props.progress]);

  return (
    <LoadingBar
      progress={progressNum}
      color={props.color}
      height={props.height}
      onLoaderFinished={() => {
        setProgressNum(0);
        props.onLoaderFinishedFunction();
      }}
    />
  );
};

TopLoadingBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  onLoaderFinishedFunction: PropTypes.func,
};

TopLoadingBar.defaultProps = {
  progress: 0,
  color: 'limegreen',
  height: 2,
  onLoaderFinishedFunction: () => {},
};

export default memo(TopLoadingBar, (prevProps, currentProps) => {
  return isEqual(prevProps.progress, currentProps.progress) && isEqual(prevProps.color, currentProps.color) && isEqual(prevProps.height, currentProps.height); // true = Not render this component, false = render this component
});
