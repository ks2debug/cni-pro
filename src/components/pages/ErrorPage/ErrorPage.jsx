import React, { useEffect } from 'react';
// import './error-page.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './error-page.module.scss';
import { Images, Constants, Utils } from '../../../utils';

const ErrorPage = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="uti-container d-flex align-items-center justify-content-center vh-100">
      <img className={`${styles.logo} position-absolute top-0 start-0 mt-3 ms-3 mt-sm-5 ms-sm-5`} src={Images.logo} alt="Offline" />
      <img
        className={`${styles.img_error}`}
        src={Images.error}
        type="button"
        alt="Error 404"
        onClick={() => {
          Utils.reloadPage();
        }}
      />
    </div>
  );
};

ErrorPage.propTypes = {};

ErrorPage.defaultProps = {};

export default ErrorPage;
