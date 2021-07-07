import * as SessionApiUtil from '../util/sessionApiUtil';

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const login = (user) => (dispatch) => {
  SessionApiUtil.login(user).then((currentUser) =>
    dispatch(receiveCurrentUser(currentUser))
  );
};
export const logout = () => (dispatch) => {
  SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser));
};
export const signup = (user) => (dispatch) => {
  SessionApiUtil.signup(user).then((currentUser) =>
    dispatch(receiveCurrentUser(currentUser))
  );
};
