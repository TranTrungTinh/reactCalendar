import React, { Component } from 'react';
import './App.css';

// components
import Header from './components/views/Header/header';
import DayStatus from './components/views/DayStatus/day-status';
import Calendar from './components/views/Calendar/calendar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <div className="divider"></div> */}
        <DayStatus />
        <Calendar />
      </React.Fragment>
    );
  }
}

export default App;
