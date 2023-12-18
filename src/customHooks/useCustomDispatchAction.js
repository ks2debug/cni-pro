import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { Constants } from '../utils';
import * as actions from '../redux/actions';

const useCustomDispatchAction = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, []);

  return bindActionCreators(actions, dispatch);
};

export default useCustomDispatchAction;
