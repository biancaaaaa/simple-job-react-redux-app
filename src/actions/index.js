import { ADD_JOB } from "../constants/action-types";

export const addJob = job => ({ type: ADD_JOB, payload: job });