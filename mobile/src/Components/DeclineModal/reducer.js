// import { push } from 'react-router-redux';
import { BASE_URL, defaultGetHeader, defaultDeleteHeader } from './../../Components/API';
// import { doLoginReset } from './../Login/reducer';
import rejects from './assets/declineReasons-200-response';

const NAME = 'reject';
const LIST = 'zenjob/reject/LIST';
const LIST_FAIL = 'zenjob/reject/LIST_FAIL';

const defaultState = {
  list: [],
  listFail: false,
};

const reducer = (state = defaultState, { type, payload } = {}) => {
  switch (type) {
    case LIST:
      return { ...state, list: payload };
    case LIST_FAIL:
      return { ...state, listFail: true };
    default:
      return state;
  }
};

const doListRejects = () => {
  return (dispatch, state) => {
    const { auth } = state();
    return fetch(`${BASE_URL}/api/employee/v1/data/declineReasons`, defaultGetHeader(auth.token))
      .then(response => response.json())
      .then(() => {
        // if (response.error && response.error.code === 'unauthorized') {
        // dispatch(doLoginReset());
        // dispatch(push('/login'));
        // } else {
        // dispatch({ type: LIST, payload: response.reasons });
        dispatch({ type: LIST, payload: rejects.reasons });
        // }
      })
      .catch(() => dispatch({ type: LIST_FAIL }));
  };
};

const doRejectOffer = (id, reason) => {
  return (dispatch, state) => {
    const { auth } = state();
    return fetch(`${BASE_URL}/api/employee/v1/offers/${id}`, defaultDeleteHeader(auth.token, reason))
      .then(response => response.json())
      .then(() => {
        // if (response.error && response.error.code === 'unauthorized') {
        // dispatch(doLoginReset());
        // dispatch(push('/login'));
        // } else {
        // dispatch({ type: LIST, payload: response.reasons });
        // dispatch({ type: LIST, payload: rejects.reasons });
        // }
      })
      .catch(() => dispatch({ type: LIST_FAIL }));
  };
};

export {
  NAME,
  reducer,
  doListRejects,
  doRejectOffer,
};