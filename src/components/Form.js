import React, {Component} from "react";
import fire from '../config/Fire';

export default class Form extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();

    const database = fire.database().ref('jobs');
    const {title,description} = this.state;

    database.push().set({
      title, description
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
        <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}/>
        <input type="submit" value="Add"/>
      </form>
    );
  }
}