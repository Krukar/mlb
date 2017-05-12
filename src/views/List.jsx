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
    let games = utilities.createList(this.props.games, this.props.favourite);

    return (
      <div className="list">
        {games}
      </div>
    );
  }
}

export default List;
