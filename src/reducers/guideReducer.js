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
  confirmOpen: false,
  guide: null,
  singleRead: null,
  deleteID: null,
  filteredGuides: null,
};

export function guideReducer(state = initialState, action) {
  switch(action.type) {
    case types.SUCCESS:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: action.payload || [...state.guides],
        guide: state.guide,
        confirmOpen: state.confirmOpen,
        deleteID: state.deleteID,
        message: action.message || null,
        singleRead: state.singleRead,
      };
    case types.FAILURE:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        confirmOpen: state.confirmOpen,
        deleteID: state.deleteID,
        error: action.payload.error,
        singleRead: state.singleRead,
      };
    case types.FETCHING_GUIDES:
      return {
        ...initialState,
        guideFormOpen: state.guideFormOpen,
        guides: [...state.guides],
        guide: state.guide,
        confirmOpen: state.confirmOpen,
        deleteID: state.deleteID,
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
        singleRead: state.singleRead,
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
        confirmOpen: state.confirmOpen,
        deleteID: state.deleteID,
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
        singleRead: action.payload,
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
        singleRead: state.singleRead,
      };
    case types.CLOSE_GUIDE_FORM:
      return {
        ...initialState,
        guides: [...state.guides],
        guideFormOpen: false,
        singleRead: state.singleRead,
      };
    case types.OPEN_CONFIRM:
      return {
        ...initialState,
        guides: [...state.guides],
        deleteID: action.payload,
        confirmOpen: true,
      };
    case types.CLOSE_CONFIRM:
      return {
        ...initialState,
        guides: [...state.guides],
        confirmOpen: false,
      };
    case types.SEARCH_GUIDES:
      return {
        ...initialState,
        guides: [...state.guides],
        filteredGuides: action.payload,
        singleRead: state.singleRead,
      };
    default:
      return state;
  }
}
