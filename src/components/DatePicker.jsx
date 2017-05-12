'use strict';
/* ============
DatePicker.jsx
This is our date picker
============ */

// React
import React, { Component } from 'react';

// Actions
import * as utilities from 'actions/utilities.jsx'

class DatePicker extends Component{
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let today = new Date();
    let date = utilities.getYYYYMMDD(today);

    this.state = {
      date: date
    };

    this.props.handleChange(date);
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
        <form>
          <input name="date" type="date" value={this.state.date} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default DatePicker;
