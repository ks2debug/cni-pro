// first component
import React, { memo, useEffect } from 'react';
// import './loader.scss';
import { HashLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import styles from './loader.module.scss';
import { Constants } from '../../../utils';

const Loader = (props) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={`${styles.div_loader} uti-center-of-screen-current-position bg-white bg-opacity-50 vw-100 vh-100`}>
      <div className="uti-center-of-screen-current-position">
        <div className="d-flex flex-column align-items-center">
          <HashLoader
            color="blue"
            loading
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p className="text-primary mt-2 text-center">
            <strong>{props.loadingMessage}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  loadingMessage: PropTypes.string,
};

Loader.defaultProps = {
  loadingMessage: Constants.LOADING_3_DOT,
};

export default memo(Loader);
