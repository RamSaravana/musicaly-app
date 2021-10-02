import * as types from "../constants/actionTypes";

import * as api from "../api/index";

export const getAlbums = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAll();
    dispatch({ type: types.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAlbum = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(id);

    dispatch({ type: types.FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const setAlbum = (id) => (dispatch, getState) => {
  try {
    const state = getState();
    const selectedAlbum = state.albums.albumData.filter(
      (data) => data._id === id
    );
    dispatch({ type: types.SELECTED_ALBUM, payload: selectedAlbum });
  } catch (err) {
    console.log(err);
  }
};
