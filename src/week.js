import React, { Component } from 'react';
import './week.css';
import ToDoList from './ToDoList'

class Week extends Component {

  render() {
    return (
      <div className="this-week">
        <ToDoList />
        <ToDoList />
        <ToDoList />
        <ToDoList />
        <ToDoList />
        <ToDoList />
        <ToDoList />
      </div>
    )
  }
}

export default Week;
