import initialState from '../initialStates';
import {userConstants} from '../types';
export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLoading: true,
        loggedIn: false,
        user: action.user,
        userToken: null,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isLoading: false,
        loggedIn: true,
        user: action.user,
        userToken: action.token,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        isLoading: false,
        loggedIn: false,
        user: action.user,
        userToken: null,
      };
    default:
      return state;
  }
};
