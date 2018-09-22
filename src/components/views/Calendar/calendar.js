import React, { Component } from 'react';
import { connect } from 'react-redux';
import './calendar.css';

import Week from './Week/week';
import EventForm from '../EventForm/event-form';

class Calendar extends Component {
  state = {
    isShow: false,
    current: '',
    screenX: '',
    screenY: ''
  }

  onShowForm = (payload) => {
    this.setState({ ...payload, isShow: true })
  }

  onCloseForm = () => {
    this.setState({ isShow: false })
  }

  render() {
    return (
      <div id="calendar">
        {this.props.weeks.map((e, i) => <Week key={i} week={e} onShowForm={this.onShowForm}/>)}
        <EventForm show={this.state} onCloseForm={this.onCloseForm}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  weeks: state.current.weeks
})
export default connect(mapStateToProps)(Calendar);