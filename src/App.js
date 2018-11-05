import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import JobList from "./components/JobList";

export default class App extends Component {
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
