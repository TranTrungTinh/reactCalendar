import React, { Component } from 'react'
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div>
          <img src="./images/logo.png" alt="This is the logo" />
          <h1>React.js Calendar</h1>
        </div>
        <div>
          <div>
            <span>September 2018</span>
            <i className="fa fa-minus-circle"></i>
            <i className="fa fa-plus-circle"></i>
          </div>
        </div>
      </div>
    )
  }
}
