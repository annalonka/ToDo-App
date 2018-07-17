import React, { Component } from 'react';
import './App.css';
import Header from './header';
import './header.css'
import Today from './today';
import Week from './week'


class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      week: false,
    }

    this.changeThisWeek = this.changeThisWeek.bind(this)
    this.changeToday = this.changeToday.bind(this)

  }

  changeThisWeek() {
    this.setState({
      week: true
    })
  }

  changeToday() {
    this.setState({
      week: false
    })
  }

  print() {
    window.print();
  }

  render() {
    return (
      <div className="App">
        <Header
          className="header"
          today={this.changeToday}
          thisWeek={this.changeThisWeek}
        />
        {this.state.week === false ? <Today /> : <Week />}
      </div>
    )
  }
}

export default App;
