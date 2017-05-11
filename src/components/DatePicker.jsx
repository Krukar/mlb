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

  render() {
    return (
      <div className="datePicker">
        <form>
          <input name="date" type="date" value={this.props.value} onChange={this.props.handleChange}/>
        </form>
      </div>
    );
  }
}

export default DatePicker;
