import React, { Component } from 'react'
import './day-status.css'

export default class DayStatus extends Component {
  render() {
    return (
      <div id="day-status">
        <div>Mon</div>
        <div>Tue</div>
        <div>Web</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
    )
  }
}
