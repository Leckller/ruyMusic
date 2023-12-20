import { AnyAction } from 'redux';
import { ActionsAllMusic } from '../actions/AllMusicsActions';

const { LAST_VISITED_ALBUMS, FETCH_ALBUMS_COMPLETE,
  FETCH_LOADING_ALBUMS } = ActionsAllMusic;

const INITIAL_STATE = {
  // lastVisitedAlbums
  Loading: {},
  LVA: [],
  Pesquisas: [],
};

const AllMusicsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case LAST_VISITED_ALBUMS: {
      if (state.LVA.some((alb) => alb === action.payload)) { return { ...state }; }
      return { ...state, LVA: [...state.LVA, action.payload] }; }

    case FETCH_LOADING_ALBUMS: {
      const { search, boolean } = action.payload;
      return { ...state, Loading: { ...state.Loading, [search]: boolean } }; }

    case FETCH_ALBUMS_COMPLETE: {
      const { albums, search } = action.payload;
      return { ...state, Pesquisas: [...state.Pesquisas, { search, albums }] }; }

    default: { return { ...state }; }
  }
};

export default AllMusicsReducer;
