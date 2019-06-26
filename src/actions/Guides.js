import * as types from './index';
import axios from 'axios';

const authAxios = axios.create({
  headers: {
    Authorization: localStorage.getItem('howToAccessToken')
  }
})

export const openGuideForm = () => dispatch => {
  dispatch({type: types.GUIDE_FORM_OPEN});
}

export const closeGuideForm = () => dispatch => {
  dispatch({type: types.CLOSE_GUIDE_FORM});
}

export const fetchGuides = () => (dispatch) => {
  dispatch({type: types.FETCHING_GUIDES});
  authAxios.get(`${types.BASE_URL}guides`)
  .then(response => {
    localStorage.setItem('guidesData', JSON.stringify(response.data));
    dispatch({
      type: types.SUCCESS,
      payload: response.data,
    });
  })
  .catch(err => {
    dispatch({
      type: types.FAILURE,
      payload: {error: err.response.data.message || err.message},
    });
  });
}

export const createGuide = (guide) => (dispatch) => {
  dispatch({type: types.CREATING_GUIDE});
  authAxios.post(`${types.BASE_URL}guides`, guide)
  .then(response => {
    dispatch({
      type: types.SUCCESS,
      message: 'New guide created',
    });
    fetchGuides();
  })
  .catch(err => {
    dispatch({
      type: types.FAILURE,
      payload: {error: err.response.data.message || err.message},
    });
  });
}
