import React, { useEffect } from 'react';
// import './page-not-found.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './page-not-found.module.scss';
import { Images, Constants } from '../../../utils';

const PageNotFound = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="uti-container d-flex align-items-center justify-content-center vh-100">
      <img className={`${styles.logo} position-absolute top-0 start-0 mt-3 ms-3 mt-sm-5 ms-sm-5`} src={Images.logo} alt="Offline" />
      <img
        className={`${styles.img_error_404}`}
        src={Images.error_404}
        type="button"
        alt="Error 404"
        onClick={() => {
          navigate(Constants.ENUM_PATH.ASSIGNMENT_ONE, { replace: false, state: { dataFomrPageNotFound: 'Hari leela kalptaru' } });
        }}
      />
    </div>
  );
};

PageNotFound.propTypes = {};

PageNotFound.defaultProps = {};

export default PageNotFound;
