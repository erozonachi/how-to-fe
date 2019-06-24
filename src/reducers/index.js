import { authReducer } from './authReducer';
import { guideReducer } from './guideReducer';
import { combineReducers } from 'redux';

export const combinedReducers = combineReducers({
  auth: authReducer,
  guidesData: guideReducer,
});
