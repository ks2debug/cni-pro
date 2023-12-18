import React, { memo, useEffect } from 'react';
// import './footer.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './footer.module.scss';
import { Constants, Images, StylesDarkMode } from '../../../utils';

const Footer = (props) => {
  const location = useLocation();
  const { isDarkMode } = useSelector((state) => state.common);

  useEffect(() => {
    return () => {};
  }, []);

  if (location.pathname === Constants.ENUM_PATH.ASSIGNMENT_ONE || location.pathname === Constants.ENUM_PATH.ASSIGNMENT_TWO) {
    return (
      <div className={classNames(isDarkMode && [StylesDarkMode.container], classNames(location.pathname === Constants.ENUM_PATH.TALLY_COUNTER && 'w-100 position-fixed bottom-0'), 'mx-auto p-2')}>
        {' '}
        <footer className={classNames(isDarkMode ? [StylesDarkMode.container] : 'bg-white', 'd-flex flex-wrap justify-content-center justify-content-sm-between align-items-center border-top p-3')}>
          {' '}
          <div className="col-md-4 d-flex flex-wrap flex-sm-nowrap justify-content-center align-items-center w-auto">
            <img className={`${styles.img_logo} rounded-1 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1`} src={Images.logo} alt="Logo" />
            <span className={classNames(isDarkMode ? [StylesDarkMode.p] : 'text-body-secondary', 'mb-md-0 text-center text-sm-start')}>© 2023 Sahajanand Company, Inc swaminarayan</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="https://twitter.com/" target="_blank" rel="noreferrer">
                {Images.twitter}
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                {Images.instagram}
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                {Images.facebook}
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
  return null;
};

/* Footer.propTypes = {
}

Footer.defaultProps = {
} */

export default Footer;
