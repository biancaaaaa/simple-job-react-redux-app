import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from "../reducers/index";
import {fetchJobs, jobRemovedListener, jobAddedListener} from "../actions/index";
import {composeWithDevTools} from "redux-devtools-extension";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
);

store.dispatch(fetchJobs());
store.dispatch(jobAddedListener());
store.dispatch(jobRemovedListener());

export default store;