import React from 'react';
import ReactDOM from 'react-dom';

import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import ConnMainWrapper from './MainWrapper';
import {
  mediaTypeReducer,
  mediaObjectReducer,
} from './reducers/mediaType-reducer';
import { SearchReducer, SACReducer } from './reducers/search-reducer';


const allReducers = combineReducers({
  MediaObject: mediaObjectReducer,
  currentMediaTap: mediaTypeReducer,
  apiReqState: SearchReducer,
  autoComplete: SACReducer, // SAC is Search Auto Complete
});

const allStoreEnchancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension(),
);

const store = createStore(allReducers, allStoreEnchancer);


ReactDOM.render(<Provider store={store}><div><ConnMainWrapper /></div></Provider>, document.getElementById('media player'));
// ReactDOM.render(<App2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();