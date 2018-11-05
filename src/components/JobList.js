import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return { jobs: state.jobs };
};

const ConnectJobList = ({jobs, removeJob}) => (
  <ul>
    {jobs.map(job => (
      <li key={job.id}>
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <button onClick={()=> removeJob(job.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

const JobsList = connect(mapStateToProps)(ConnectJobList);
export default JobsList;