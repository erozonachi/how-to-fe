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

export const updateGuide = (guide, id) => (dispatch) => {
  dispatch({type: types.UPDATING_GUIDE});
  authAxios.put(`${types.BASE_URL}guides/${id}`, guide)
  .then(response => {
    dispatch({
      type: types.SUCCESS,
      message: 'Guide update successful',
    });
    dispatch(fetchGuides());
  })
  .catch(err => {
    dispatch({
      type: types.FAILURE,
      payload: {error: err.response.data.message || err.message},
    });
  });
}

export const deleteGuide = (id) => (dispatch) => {
  dispatch({type: types.DELETING_GUIDE});
  authAxios.delete(`${types.BASE_URL}guides/${id}`)
  .then(response => {
    dispatch({
      type: types.SUCCESS,
      message: 'Guide delete successful',
    });
    dispatch(fetchGuides());
  })
  .catch(err => {
    dispatch({
      type: types.FAILURE,
      payload: {error: err.response.data.message || err.message},
    });
  });
}
