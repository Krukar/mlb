/* ============
Games.jsx
The list of games
============ */

// React
import React, { Component } from 'react';

// Actions
import * as list from 'actions/list.jsx';

class Games extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let games = this.props.games ? list.games(this.props.games, this.props.favourite) : undefined;

    return (
      <div className="games">
        {games}
      </div>
    );
  }
}

export default Games;
