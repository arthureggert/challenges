// import { push } from 'react-router-redux';
import { BASE_URL, defaultGetHeader } from './../../Components/API';
// import { doLoginReset } from './../Login/reducer';
import offers from './assets/offers-200-response';
import offer from './assets/offer-200-response';

const NAME = 'offer';
const LIST = 'zenjob/offer/LIST';
const LIST_FAIL = 'zenjob/offer/LIST_FAIL';
const GET = 'zenjob/offer/GET';
const GET_FAIL = 'zenjob/offer/GET_FAIL';
const RESET = 'zenjob/offer/RESET';

const defaultState = {
  offers: [],
  listFail: false,
  offer: {},
  getFail: false,
};

const reducer = (state = defaultState, { type, payload } = {}) => {
  switch (type) {
    case GET:
      return { ...state, offer: payload };
    case GET_FAIL:
      return { ...state, getFail: true };
    case LIST:
      return { ...state, offers: payload };
    case LIST_FAIL:
      return { ...state, listFail: true };
    case RESET:
      return { ...defaultState };
    default:
      return state;
  }
};

const doListOffers = () => {
  return (dispatch, state) => {
    const { auth } = state();
    return fetch(`${BASE_URL}/api/employee/v1/offers?offset=0`, defaultGetHeader(auth.token))
      .then(response => response.json())
      .then(() => {
        // if (response.error && response.error.code === 'unauthorized') {
        // dispatch(doLoginReset());
        // dispatch(push('/login'));
        // } else {
        // dispatch({ type: LIST, payload: response.offers });
        dispatch({ type: LIST, payload: offers.offers });
        // }
      })
      .catch(() => dispatch({ type: LIST_FAIL }));
  };
};

const doGetOffer = (id) => {
  return (dispatch, state) => {
    const { auth } = state();
    return fetch(`${BASE_URL}/api/employee/v1/offers/${id}`, defaultGetHeader(auth.token))
      .then(response => response.json())
      .then(() => {
        // if (response.error && response.error.code === 'unauthorized') {
        // dispatch(doLoginReset());
        // dispatch(push('/login'));
        // } else {
        // dispatch({ type: GET, payload: response });
        dispatch({ type: GET, payload: offer });
        // }
      })
      .catch(() => dispatch({ type: GET_FAIL }));
  };
};


export {
  NAME,
  reducer,
  doListOffers,
  doGetOffer,
};