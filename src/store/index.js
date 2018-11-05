import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from "../reducers/index";
import {fetchJobs, jobsListener} from "../actions/index";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(fetchJobs());
store.dispatch(jobsListener());

export default store;