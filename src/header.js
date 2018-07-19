import React, { Component } from 'react';
import { Button} from 'reactstrap';
import './css/header.css'

class Header extends Component {
  print() {
    window.print();
  }


  render() {
    return (
      <div className="header-nav">
        <span className="fading-line"></span>
        <h1>(Things To Do)</h1>
        <span className="fading-line"></span>
        <div className="navigation">
          <Button outline className="printbutton no-print" onClick={this.print}>
            <span className="fa fa-print" aria-hidden="true" />
          </Button>
        </div>
      </div>
    )
  }
}

export default Header
