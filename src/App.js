import React, { Component } from 'react';
import './css/App.css';
import Header from './header';
import ToDoList from './ToDoList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          className="header"
        />
        <ToDoList />
      </div>
    )
  }
}

export default App;
