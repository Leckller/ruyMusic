import { AnyAction } from 'redux';
import { ActionsAllMusic } from '../actions/AllMusicsActions';

const { LAST_VISITED_ALBUMS } = ActionsAllMusic;

const INITIAL_STATE = {
  // lastVisitedAlbums
  LVA: [],
};

const AllMusicsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case LAST_VISITED_ALBUMS: {
      if (state.LVA.some((alb) => alb === action.payload)) { return { ...state }; }
      return { ...state, LVA: [...state.LVA, action.payload] }; }
    default: { return { ...state }; }
  }
};

export default AllMusicsReducer;
