'use strict';
/* ============
DatePicker.jsx
This is our date picker
============ */

// React
import React, { Component } from 'react';

class DatePicker extends Component{
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.state = {
      date: this.props.date
    };

    // When the app loads we init with today's data
    this.props.handleChange(this.props.date);
  }

  handleChange = event => {
    let date = event.target.value;

    this.setState({
      date: date
    });

    this.props.handleChange(date);
  }

  render() {
    return (
      <div className="datePicker">
        <h2>Select date</h2>
        <input className="input" name="date" type="date" value={this.state.date} onChange={this.handleChange} required/>
      </div>
    );
  }
}

export default DatePicker;
