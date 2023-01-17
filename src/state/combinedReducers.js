import { combineReducers } from 'redux';

import postReducer from './post/reducer';
import tagsReducer from './tags/reducer';
import userReducer from './users/reducer';

const reducers = combineReducers({
  postReducer, tagsReducer, userReducer,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
