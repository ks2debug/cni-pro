/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { bindActionCreators, compose } from '@reduxjs/toolkit';
import { Helmet } from 'react-helmet';
import { Tooltip } from 'react-tooltip';
import { useRendersCount } from 'react-use';
import Nestable from 'react-nestable';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { useCustomDispatchAction } from '../../../customHooks';
import { DataModelNavigationBar } from '../../organisms/NavigationBar/DataModelNavigationBar';
import { AddLoaderHOC } from '../../../hoc';
import { Constants, Images, LocalStorageManager, Utils } from '../../../utils';
import styles from './assignment-one.module.scss';
import assignmentOneData1 from '../../../utils/data-json/assignmentOneData1.json';

const cssCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '100%',
  cursor: 'pointer',
  borderRight: '1px solid Gainsboro',
};

const items = assignmentOneData1;

const renderItem = (props) => {
  const { item, index, collapseIcon, handler } = props;
  console.log('🚀 ~ file: AssignmentOne.jsx:113 ~ renderItem ~ item:', item);

  return (
    <div style={{ background: 'WhiteSmoke', display: 'flex', fontWeight: item.children.length ? '700' : '400' }}>
      {handler}
      {collapseIcon}
      <div
        className="col-2"
        style={{
          padding: '5px',
        }}
      >
        {item.title}
      </div>
      <div className="d-flex flex-row my-auto justify-content-end  me-2 w-100">
        <div className="col-2 text-end">{item.itemName}</div>
        <div className="col-2 text-end">{item.date}</div>
      </div>
    </div>
  );
};

const AssignmentOne = (props) => {
  const { setIsLoadingState, setLoadingMessageState } = props;
  const location = useLocation();

  const { action_store_reset, action_common_top_loading_bar_progress, action_navigation_bar_data } = useCustomDispatchAction();

  const rendersCount = useRendersCount();

  const [collapseAll, setCollapseAll] = useState(false);
  const Handler = () => {
    return (
      <div style={{ ...cssCenter }}>
        <PiDotsSixVerticalBold />
      </div>
    );
  };
  const Collapser = ({ isCollapsed }) => {
    return (
      <div style={{ ...cssCenter }}>
        {isCollapsed ? (
          <FiPlusCircle />
        ) : (
          <div>
            <FiMinusCircle />
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    action_navigation_bar_data(
      new DataModelNavigationBar({
        currentPageName: Utils.getComponentNameInLowerCase_useLocation(location),
        title: 'Assignment One Page',
      }),
    );

    setCollapseAll(true);

    action_common_top_loading_bar_progress(Utils.getRandomNumberInRange(10, 30));
    setIsLoadingState(true);

    action_common_top_loading_bar_progress(100);
    setIsLoadingState(false);
    return () => {};
  }, []);

  return (
    <div className="uti-container">
      <Helmet>
        <title>Assignment One</title>
        <meta name="description" content="Description for assignment one page" />
      </Helmet>

      <div className="d-flex flex-column align-items-center w-100 px-3">
        <button type="button" className="btn btn-primary mx-auto my-3" style={{ padding: '8px 150px' }} onClick={() => setCollapseAll(!collapseAll)}>
          {collapseAll ? 'Expand All' : 'Collapse All'}
        </button>

        <Nestable className="w-100 mb-5" items={items} renderItem={renderItem} handler={<Handler />} renderCollapseIcon={({ isCollapsed }) => <Collapser isCollapsed={isCollapsed} />} collapsed={collapseAll} onChange={(items) => console.log(items)} />
      </div>
      <Tooltip id="tooltioIDFirst" />
    </div>
  );
};

const EnhancedAssignmentOne = compose(AddLoaderHOC(''))(AssignmentOne);

export default EnhancedAssignmentOne;
