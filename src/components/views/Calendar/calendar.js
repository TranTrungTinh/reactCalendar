import React, { Component } from 'react';
import './calendar.css';

export default class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        <div className="calendar-week">
          <div className="day not-current-month past">
            <div>27</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>28</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>29</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>30</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>31</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day today">
            <div>1</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day past">
            <div>2</div>
            <ul className="event-list"></ul>
          </div>
        </div>

        <div className="calendar-week">
          <div className="day not-current-month past">
            <div>27</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>28</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>29</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>30</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>31</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day past">
            <div>1</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day past">
            <div>2</div>
            <ul className="event-list"></ul>
          </div>
        </div>

        <div className="calendar-week">
          <div className="day not-current-month past">
            <div>27</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>28</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>29</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>30</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day not-current-month past">
            <div>31</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day past">
            <div>1</div>
            <ul className="event-list"></ul>
          </div>
          <div className="day">
            <div>2</div>
            <ul className="event-list"></ul>
          </div>
        </div>

      </div>
    )
  }
}
