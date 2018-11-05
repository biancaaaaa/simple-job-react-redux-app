import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import JobList from "./components/JobList";
import fire from './config/Fire';

export default class App extends Component {
  removeJob = id => {
    fire.database().ref('jobs').child(id).remove();
  };

  render() {
    return (
      <div className="App">
        <h1>Add new job</h1>
        <Form/>
        <h1>Jobs</h1>
        <JobList removeJob={this.removeJob}/>
      </div>
    );
  }
}
