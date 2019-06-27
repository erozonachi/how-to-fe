import * as types from '../actions';

const initialState = {
  guides: JSON.parse(localStorage.getItem('guidesData')) || [],
  error: null,
  message: null,
  fetchingGuides: false,
  creatingGuide: false,
  updatingGuide: false,
  deletingGuide: false,
  readingGuide: false,
  likingGuide: false,
  tryingGuide: false,
  guideFormOpen: false,
  guide: null,
};

export function guideReducer(state = initialState, action) {
  switch(action.type) {
    case types.SUCCESS:
      return {
        ...initialState,
        guides: action.payload || [...state.guides],
        message: action.message || null,
      };
    case types.FAILURE:
      return {
        ...initialState,
        guides: [...state.guides],
        error: action.payload.error,
      };
    case types.FETCHING_GUIDES:
      return {
        ...initialState,
        guides: [...state.guides],
        fetchingGuides: true,
      };
    case types.CREATING_GUIDE:
      return {
        ...initialState,
        guides: [...state.guides],
        creatingGuide: true,
      };
    case types.UPDATING_GUIDE:
      return {
        ...initialState,
        guides: [...state.guides],
        updatingGuide: true,
      };
    case types.DELETING_GUIDE:
      return {
        ...initialState,
        guides: [...state.guides],
        deletingGuide: true,
      };
    case types.READING_GUIDE:
      return {
        ...initialState,
        guides: [...state.guides],
        readingGuide: true,
      };
    case types.LIKING_GUIDE:
      return {
        ...initialState,
        guides: [...state.guides],
        likingGuide: true,
      };
    case types.TRYING_GUIDE:
      return {
        ...initialState,
        guides: [...state.guides],
        tryingGuide: true,
      };
    case types.GUIDE_FORM_OPEN:
      return {
        ...initialState,
        guides: [...state.guides],
        guide: action.payload,
        guideFormOpen: true,
      };
    case types.CLOSE_GUIDE_FORM:
      return {
        ...initialState,
        guides: [...state.guides],
        guideFormOpen: false,
      };
    case types.GUIDE_TO_EDIT:
      return {
        ...initialState,
        guides: [...state.guides],
        guide: action.payload,
      };
    default:
      return state;
  }
}
