import React from 'react';
import axios from 'axios';
import userConstants from '../types';
import {app_url} from '../../CONSTANTS';
import {useDispatch} from 'react-redux';

export const login_user = (uname, pass) => {
  const dispatch = useDispatch();
  dispatch({type: userConstants.LOGIN_REQUEST});
  const config = {
    method: 'post',
    url: app_url + '/login',
    data: {
      model: 'user',
      username: uname,
      password: pass,
    },
  };
  axios(config)
    .then(res => dispatch({type: userConstants.LOGIN_SUCCESS, user: res.data}))
    .catch(err =>
      dispatch({type: userConstants.LOGIN_FAILURE, error: err.message}),
    );
};
