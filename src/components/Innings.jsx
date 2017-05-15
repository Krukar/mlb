/* ============
Innings.jsx
Innings at the top of details view
============ */

// React
import React, { Component } from 'react';

// Actions
import * as details from 'actions/details.jsx';

class Innings extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let innings = details.innings(this.props.data);

    return (
      <div className="innings">
        {innings}
      </div>
    );
  }
}

export default Innings;
