import { ADD_JOB } from "../constants/action-types";
import { REQUEST_JOBS } from "../constants/action-types";
import { RECEIVE_JOBS } from "../constants/action-types";

import fire from '../config/Fire';

// adds a single job
export const addJob = job => ({ type: ADD_JOB, payload: job });

// requests jobs from the database
export const requestJobs = () => ({ type: REQUEST_JOBS });

// receives jobs from the database
export const receiveJobs = jobs => ({
  type: RECEIVE_JOBS,
  jobs,
  receivedAt: Date.now()
});


// ----------- ASYNC ACTIONS ----------- //

// fetches jobs from the database (thunk async function)
export const fetchJobs = () => {
  return dispatch => {
    dispatch(requestJobs());
    return fire.database().ref('jobs').once('value', snapshot => {
      const data = snapshot.val();
      const jobs = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      dispatch(receiveJobs(jobs));
    });
  };
};

// adds listener to jobs
export const jobsListener = () => {
  return (dispatch, getState) => {
    dispatch(requestJobs());
    return fire.database().ref('jobs').on('child_added', snapshot => {
      const state = getState();
      if(state.fetchingDone) {
        const data = snapshot.val();
        const job = {
          id: snapshot.key,
          title: data.title,
          description: data.description
        };
        dispatch(addJob(job));
      }
    });
  };
};