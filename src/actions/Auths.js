import * as types from './index';
import axios from 'axios';

export const registerUser = (user) => (dispatch) => {
  dispatch({type: types.SIGNING_UP});
  axios.post(`http://localhost:8000/register`, user)
  .then(response => {
    localStorage.setItem('howToAccessToken', response.data.token);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: response.data,
    });
  })
  .catch(err => {
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: {error: err.message},
    });
  });
}
