'use strict';
/* ============
List.jsx
List view of games for a specific day
============ */

// React
import React, { Component } from 'react';

// Actions
import * as utilities from 'actions/utilities.jsx'

class List extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    // Prop will either be an array of games, a string to indicate no games on a particular day or an error message
    let games = Array.isArray(this.props.games) ? utilities.createList(this.props.games, this.props.favourite) : this.props.games;

    return (
      <div className="list">
        {games}
      </div>
    );
  }
}

export default List;
