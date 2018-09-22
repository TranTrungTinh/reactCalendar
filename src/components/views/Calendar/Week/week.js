import React, { Component } from 'react'
import moment from 'moment';

export default class Week extends Component {

  formatDay = (day) => day.format('D');
  
  byClass = (day) => {
    const today = day.isSame(moment(), 'day');
    const sameOrBefore = day.isSameOrBefore(moment(), 'day');
    const beforeMonth = day.isBefore(moment(), 'month');
    if(today) return 'day today';
    if(beforeMonth) return 'day not-current-month past';
    if(sameOrBefore && !today) return 'day past';
    return 'day';
  }

  render() {
    return (
      <div className="calendar-week">
        {this.props.week.map((day, i) => 
          (<div className={this.byClass(day)} key={i}>
            <div>{this.formatDay(day)}</div>
            <ul className="event-list"></ul>
          </div>)
        )}
      </div>
    )
  }
}
