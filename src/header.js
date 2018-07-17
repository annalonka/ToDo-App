import React, { Component } from 'react';
import { Button} from 'reactstrap';

class Header extends Component {
  today() {
    this.props.today()
  }

  thisWeek(){
    this.props.thisWeek()
  }

  print() {
    window.print();
  }


  render() {
    return (
      <div className="header-nav">
        <span className="fading-line" id="upper-line"></span>
        <h1>(Things To Do)</h1>
        <span className="fading-line" id="bottom-line"></span>
        <div className="navigation">
          <Button outline className="nav-button" onClick={() => this.today()}>... today</Button>
          <Button outline className="nav-button" onClick={() => this.thisWeek()}>... this week</Button>
          <Button outline className="printbutton" onClick={this.print}>
            <span className="fa fa-print" aria-hidden="true" />
          </Button>
        </div>
      </div>
    )
  }
}

export default Header
