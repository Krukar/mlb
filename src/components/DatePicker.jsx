'use strict';
/* ============
DatePicker.jsx
This is our date picker
============ */
import React, { Component } from 'react';
import * as utilities from 'actions/utilities.jsx';

class DatePicker extends Component{
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount(){
    this.state = {
      date: utilities.getYYYYMMDD()
    }
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      date: event.target.value,
    })
  }

  render() {
    return (
      <div className="datePicker">
        <form>
          <input type="date" value={this.state.date} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default DatePicker;
