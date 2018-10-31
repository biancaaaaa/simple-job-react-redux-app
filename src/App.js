import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import JobList from "./components/JobList";
import {addJob} from "./actions/index";
import {connect} from "react-redux";
import fire from './config/Fire';

const mapDispatchToProps = dispatch => {
  return {
    addJob: job => dispatch(addJob(job))
  };
};

class ConnectedApp extends Component {
  componentDidMount() {
    this.addDatabaseListeners();
  }

  addDatabaseListeners() {
    const database = fire.database().ref('jobs');

    // Listener for added job
    database.on('child_added', snap => {
      const job = snap.val();
      this.props.addJob({
        id: snap.key,
        title: job.title,
        description: job.description
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Add new job</h1>
        <Form/>
        <h1>Jobs</h1>
        <JobList/>
      </div>
    );
  }
}

const App = connect(null, mapDispatchToProps)(ConnectedApp);
export default App;
