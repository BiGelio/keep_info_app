import userConstants from '../types';

export const request = user => {
  return {type: userConstants.LOGIN_REQUEST, user};
};
export const success = user => {
  return {type: userConstants.LOGIN_SUCCESS, user};
};
export const failure = error => {
  return {type: userConstants.LOGIN_FAILURE, error};
};
