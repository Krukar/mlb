/* ============
Players.jsx
The list of players
============ */

// React
import React, { Component } from 'react';

// Actions
import * as details from 'actions/details.jsx';

class Players extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let players = details.players(this.props.batting);

    return (
      <div className="players">
        {players}
      </div>
    );
  }
}

export default Players;
