'use strict';
/* ============
App.jsx
Our main React app
============ */
import React, { Component } from 'react';
import DatePicker from 'components/DatePicker.jsx';
import List from 'views/List.jsx';

class App extends Component{
  render() {
    return (
      <div className="app">
        <DatePicker></DatePicker>
        <List></List>
      </div>
    );
  }
}

export default App;
