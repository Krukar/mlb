'use strict';
/* ============
Details.jsx
Details view of a specific game
============ */

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      batting: undefined
    }
  }

  componentWillMount(){
    details.get(this.props.match.params.id).then(response =>{
      this.setState({
        data: response,
        batting: response.batting[0]
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
        <div className="back" onClick={() => {this.props.history.goBack()}}>Back to List View</div>
        <Innings data={this.state.data}></Innings>
        {this.state.data &&
          <div className="toggle">
            <div className={"home" + (this.state.batting.team_flag === 'home' ? ' active' : '')} onClick={() => this.setPlayers(0)}>{this.state.data.home_sname}</div>
            <div className={"away" + (this.state.batting.team_flag === 'away' ? ' active' : '')} onClick={() => this.setPlayers(1)}>{this.state.data.away_sname}</div>
          </div>
        }
        <Players batting={this.state.batting}></Players>
      </div>
    );
  }
}

export default Details;
