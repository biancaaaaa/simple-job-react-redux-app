import {ADD_JOB, REMOVE_JOB, REQUEST_JOBS, RECEIVE_JOBS} from "../constants/action-types";

const initialState = {
  jobs: [],
  isFetching: false,
  fetchingDone: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload], isFetching: false };
    case REMOVE_JOB:
      return state; //TODO
    case REQUEST_JOBS:
      return { ...state, isFetching: true };
    case RECEIVE_JOBS:
      return { ...state, jobs: [...state.jobs, ...action.jobs], isFetching: false, fetchingDone: true };
    default:
      return state;
  }
};
export default rootReducer;