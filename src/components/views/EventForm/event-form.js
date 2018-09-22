import React, { Component } from 'react'
import './event-form.css';

export default class EventForm extends Component {
  render() {
    const { isShow, screenX, screenY, current } = this.props.show;
    return (
      <div id="event-form" 
        style={{top: `${screenY}px`, left: `${screenX}px`}}
        className={isShow ? 'active' : ''}
      >
        <h4>Add an event</h4>
        <p>{current}</p>
        <div className="text">
          <input type="text" placeholder="type a text" />
        </div>
        <div className="buttons">
          <button><i className="fa fa-plus"></i> Create</button>
        </div>
        <i id="closed-button" className="fa fa-times-circle"
          onClick={() => this.props.onCloseForm()}
        ></i>
      </div>
    )
  }
}
