import React, { Component } from 'react';
import ToDoList from './ToDoList'

class Today extends Component {

  render() {
    return (
      <div className="today">
        <ToDoList />
      </div>
    )
  }
}

export default Today;
