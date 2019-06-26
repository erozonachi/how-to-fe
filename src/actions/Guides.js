import * as types from './index';
import axios from 'axios';

const authAxios = axios.create({
  headers: {
    authorization: localStorage.getItem('howToAccessToken')
  }
})

export const openGuideForm = () => dispatch => {
  dispatch({type: types.GUIDE_FORM_OPEN});
}

export const closeGuideForm = () => dispatch => {
  dispatch({type: types.CLOSE_GUIDE_FORM});
}
