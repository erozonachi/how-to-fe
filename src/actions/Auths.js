import * as types from './index';
import axios from 'axios';

export const registerUser = (user, history) => (dispatch) => {
  dispatch({type: types.SIGNING_UP});
  axios.post(`${types.BASE_URL}register`, user)
  .then(response => {
    localStorage.setItem('howToAccessToken', response.data.token);
    localStorage.setItem('howToUser', JSON.stringify(response.data));
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: response.data,
    });
    history.push('/');
  })
  .catch(err => {
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: {error: err.response.data.message || err.message},
    });
  });
}

export const loginUser = (user, history) => (dispatch) => {
  dispatch({type: types.LOGGING_IN});
  axios.post(`${types.BASE_URL}login`, user)
  .then(response => {
    localStorage.setItem('howToAccessToken', response.data.token);
    localStorage.setItem('howToUser', JSON.stringify(response.data));
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: response.data,
    });
    history.push('/');
  })
  .catch(err => {
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: {error: err.response.data.message || err.message},
    });
  });
}
