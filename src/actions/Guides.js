import * as types from './index';

export const openGuideForm = () => dispatch => {
  dispatch({type: types.GUIDE_FORM_OPEN});
}

export const closeGuideForm = () => dispatch => {
  dispatch({type: types.CLOSE_GUIDE_FORM});
}
