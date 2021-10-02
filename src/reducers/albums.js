import * as types from "../constants/actionTypes";

const state = {};
const albumsReducer = (state, action) => {
  switch (action.type) {
    case types.FETCH_ALL:
      return { ...state, albumData: action.payload };
    case types.FETCH_ONE:
      return { ...state };
    case types.SELECTED_ALBUM:
      return {
        ...state,
        selectedAlbum: action.payload,
      };
    default:
      return { ...state };
  }
};

export default albumsReducer;
