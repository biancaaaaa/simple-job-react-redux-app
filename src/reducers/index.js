import { ADD_JOB } from "../constants/action-types";

const initialState = {
  jobs: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;