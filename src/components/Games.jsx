/* ============
Games.jsx
The list of games
============ */

// React
import React, { Component } from 'react';

// Actions
import * as utilities from 'actions/utilities.jsx'

class Games extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let games = utilities.createList(this.props.games, this.props.favourite);

    return (
      <div className="games">
        {games}
      </div>
    );
  }
}

export default Games;
