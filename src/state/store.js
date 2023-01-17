import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedReducers from './combinedReducers';

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
