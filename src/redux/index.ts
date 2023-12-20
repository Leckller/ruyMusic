import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware, combineReducers,
  legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import AllMusicsReducer from './reducers/AllMusicsReducer';

const reducers = combineReducers({
  AllMusicsReducer,
});

const store = legacy_createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
