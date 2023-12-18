// first component
import React, { memo, useEffect, useState } from 'react';
// import './navigation-bar.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import classNames from 'classnames';
import { bindActionCreators } from '@reduxjs/toolkit';
import styles from './navigation-bar.module.scss';
import { useCustomDispatchAction } from '../../../customHooks';
import * as actions from '../../../redux/actions';
import { Constants, Images, LocalStorageManager, Utils } from '../../../utils';

const NavigationBar = (props) => {
  // console.log("🚀 ~ file: NavigationBar.jsx:230 ~ NavigationBar: render")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentPageName, title, clickedNavItemName } = useSelector((state) => state.navigationBar);
  const { action_store_reset, action_common_is_dark_mode } = useCustomDispatchAction();
  const { isDarkMode } = useSelector((state) => state.common);
  const [currentPageNameTemp, setCurrentPageNameTemp] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={`${styles.container_navbar}`} data-bs-theme={isDarkMode ? 'dark' : 'light'}>
      <nav className="navbar navbar-expand-md bg-secondary-subtle fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="d-block d-md-none mx-auto" id="navbarSupportedContent1">
            <span className="navbar-brand">{title}</span>
          </div>

          <div className={`${styles.div_left} collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav nav-pills me-auto mb-2 mb-lg-0 align-items-center align-items-md-start">
              <li className="nav-item">
                <button
                  className={classNames('nav-link', location.pathname === Constants.ENUM_PATH.ASSIGNMENT_ONE ? 'bg-secondary text-white mx-1' : '')}
                  type="button"
                  onClick={(event) => {
                    setCurrentPageNameTemp('');
                    navigate(Constants.ENUM_PATH.ASSIGNMENT_ONE, { replace: false, state: { dataFromNavigationBarHome: 'Nyalkaran' } });
                  }}
                >
                  Assignment One
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={classNames('nav-link', location.pathname === Constants.ENUM_PATH.ASSIGNMENT_TWO ? 'bg-secondary text-white mx-1 ' : '')}
                  type="button"
                  onClick={(event) => {
                    setCurrentPageNameTemp('');
                    navigate(Constants.ENUM_PATH.ASSIGNMENT_TWO, { replace: false, state: { dataFromNavigationBarAssignmentTwo: 'Hari charitramrut sagar' } });
                  }}
                >
                  Assignment Two
                </button>
              </li>
            </ul>

            <div className="d-none d-md-block w-auto mx-auto text-center mb-2 mb-md-0 ms-0 ms-md-3">
              <h5>{title}</h5>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

/* NavigationBar.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickNavItem: PropTypes.func,
}

NavigationBar.defaultProps = {
  currentPageName: 'Page',
  title: 'NavigationBar',
  onClickNavItem: () => { },
} */

export default NavigationBar;
