export const SUCCESS = 'SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FAILURE = 'FAILURE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNING_UP = 'SIGNING_UP';
export const LOGGING_IN = 'LOGGING_IN';
export const FETCHING_GUIDES = 'FETCHING_GUIDES';
export const CREATING_GUIDE = 'CREATING_GUIDE';
export const UPDATING_GUIDE = 'UPDATING_GUIDE';
export const DELETING_GUIDE = 'DELETING_GUIDE';
export const READING_GUIDE = 'READING_GUIDE';
export const LIKING_GUIDE = 'LIKING_GUIDE';
export const TRYING_GUIDE = 'TRYING_GUIDE';
export const GUIDE_FORM_OPEN = 'GUIDE_FORM_OPEN';
export const CLOSE_GUIDE_FORM = 'CLOSE_GUIDE_FORM';
export const BASE_URL = `http://localhost:8000/`;

export { registerUser, loginUser } from './Auths';
export { openGuideForm, } from './Guides';
