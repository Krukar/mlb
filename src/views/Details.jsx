'use strict';
/* ============
Details.jsx
Details view of a specific game
============ */

// React
import React, { Component } from 'react';

// Actions
import * as details from 'actions/details.jsx';

// Components
import Innings from 'components/Innings.jsx';
import Players from 'components/Players.jsx';

class Details extends Component{
  constructor(props) {
    super(props);

    this.state ={
      data: undefined,
      batting: undefined,
      linescore: undefined
    }
  }

  componentWillMount(){
    details.get(this.props.match.params.id).then(response =>{
      console.log(response)
      // TODO: Default if favourite
      this.setState({
        data: response,
        batting: response.batting[0],
        linescore: response.linescore,
      });
    });
  }

  setPlayers = team =>{
    this.setState({
      batting: this.state.data.batting[team]
    });
  }

  render() {
    return (
      <div className="details">
        <Innings linescore={this.state.linescore}></Innings>
        {this.state.data &&
          <div className="toggle">
            <div className="home" onClick={() => this.setPlayers(0)}>{this.state.data.home_sname}</div>
            <div className="away" onClick={() => this.setPlayers(1)}>{this.state.data.away_sname}</div>
          </div>
        }
        <Players batting={this.state.batting}></Players>
      </div>
    );
  }
}

export default Details;
