import { push } from 'react-router-redux';
import { BASE_URL, defaultPostHeader } from './../../Components/API';

const NAME = 'auth';
const LOGIN = 'zenjob/auth/LOGIN';
const LOGIN_FAIL = 'zenjob/auth/LOGIN_FAIL';
const LOGIN_RESET = 'zenjob/auth/LOGIN_RESET';

const defaultState = {
  token: '',
  error: false,
};

const reducer = (state = defaultState, { type, payload } = {}) => {
  switch (type) {
    case LOGIN:
      return { ...state, token: payload, error: false };
    case LOGIN_FAIL:
      return { ...state, error: true };
    case LOGIN_RESET:
      return { ...defaultState };
    default:
      return state;
  }
};

const doLogin = (username, password) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/api/employee/v1/auth`, defaultPostHeader({ username, password }))
      .then(response => response.json())
      .then((response) => {
        if (response.error) {
          dispatch({ type: LOGIN_FAIL });
        } else {
          dispatch({ type: LOGIN, payload: response.access_token });
          // dispatch({ type: LOGIN, payload: 'response.access_token' });
          dispatch(push('/'));
        }
      })
      .catch(() => dispatch({ type: LOGIN_FAIL }));
  };
};

const doLoginReset = () => {
  return dispatch => dispatch({ type: LOGIN_RESET });
};

export {
  NAME,
  reducer,
  doLogin,
  doLoginReset,
};