import * as types from './index';
import axios from 'axios';

export const registerUser = (user, history) => (dispatch) => {
  dispatch({type: types.SIGNING_UP});
  axios.post(`http://localhost:8000/register`, user)
  .then(response => {
    localStorage.setItem('howToAccessToken', response.data.token);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: response.data,
    });
    history.push('/');
  })
  .catch(err => {
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: {error: err.message},
    });
  });
}

export const loginUser = (user, history) => (dispatch) => {
  dispatch({type: types.LOGGING_IN});
  axios.post(`http://localhost:8000/login`, user)
  .then(response => {
    localStorage.setItem('howToAccessToken', response.data.token);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: response.data,
    });
    history.push('/');
  })
  .catch(err => {
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: {error: err.message},
    });
  });
}
