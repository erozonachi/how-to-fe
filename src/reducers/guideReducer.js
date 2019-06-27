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
        guideFormOpen: state.guideFormOpen,
        guides: action.payload || [...state.guides],
        guide: state.guide,
        message: action.message || null,
      };
    case types.FAILURE:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        error: action.payload.error,
      };
    case types.FETCHING_GUIDES:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        message: state.message,
        fetchingGuides: true,
      };
    case types.CREATING_GUIDE:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        message: state.message,
        creatingGuide: true,
      };
    case types.UPDATING_GUIDE:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        message: state.message,
        updatingGuide: true,
      };
    case types.DELETING_GUIDE:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        message: state.message,
        deletingGuide: true,
      };
    case types.READING_GUIDE:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        message: state.message,
        readingGuide: true,
      };
    case types.LIKING_GUIDE:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        message: state.message,
        likingGuide: true,
      };
    case types.TRYING_GUIDE:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        message: state.message,
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
    default:
      return state;
  }
}
