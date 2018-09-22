import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions';
import './header.css';

class Header extends Component {
  componentDidMount() {
    console.log(this.props.current);
  }

  formatDate = () => {
    const { month, year } = this.props.current;
    const date = `${year}-${month}-1`;
    return moment(date, 'YYYY-M-D').format('MMMM YYYY');
  }
  
  onNextMonth = () => {
    this.props.nextMonthAction()
  }

  onPreMonth = () => {
    this.props.preMonthAction()
  }

  render() {
    return (
      <div id="header">
        <div>
          <img src="./images/logo.png" alt="This is the logo" />
          <h1>React.js Calendar</h1>
        </div>
        <div>
          <div>
            <span>{this.formatDate()}</span>
            <i className="fa fa-minus-circle" onClick={this.onPreMonth}></i>
            <i className="fa fa-plus-circle" onClick={this.onNextMonth}></i>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  current: state.current
})
export default connect(mapStateToProps, actionCreators)(Header);