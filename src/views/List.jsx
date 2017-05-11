'use strict';
/* ============
List.jsx
List view of games for a specific day
============ */

// React
import React, { Component } from 'react';

class List extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        the list {this.props.value}
      </div>
    );
  }
}

export default List;
