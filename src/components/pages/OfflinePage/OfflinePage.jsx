import React, { useEffect } from 'react';
// import './offline-page.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './offline-page.module.scss';
import { Images, Constants, Utils } from '../../../utils';

const OfflinePage = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="uti-container d-flex align-items-center justify-content-center vh-100">
      <img className={`${styles.logo} position-absolute top-0 start-0 mt-3 ms-3 mt-sm-5 ms-sm-5`} src={Images.logo} alt="Offline" />
      <img
        className={`${styles.img_offline}`}
        src={Images.offline}
        alt="Offline" // type="button"
        onClick={() => {}}
      />
      <p className="fs-5 mt-3 mx-2 text-center">
        <strong>You appear to be offline</strong>
      </p>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="mx-2 text-center">You can't use This web-app until you're connected to the internet</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          Utils.reloadPage();
        }}
      >
        Retry
      </button>
    </div>
  );
};

OfflinePage.propTypes = {};

OfflinePage.defaultProps = {};

export default OfflinePage;
