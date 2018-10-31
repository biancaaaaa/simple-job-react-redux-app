import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return { jobs: state.jobs };
};

export const ConnectJobList = ({jobs}) => (
  <ul>
    {jobs.map(job => (
      <li key={job.id}>
        <p>{job.title}</p>
        <p>{job.description}</p>
      </li>
    ))}
  </ul>
);

const JobsList = connect(mapStateToProps)(ConnectJobList);
export default JobsList;