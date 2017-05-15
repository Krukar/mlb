'use strict';
/* ============
FavouritePicker.jsx
This is our favourite team picker
============ */

// React
import React, { Component } from 'react';

class FavouritePicker extends Component{
  constructor(props) {
    super(props);

    this.state = {
      favourite: this.props.favourite
    };
  }

  handleChange = event => {
    let favourite = event.target.value;

    this.setState({
      favourite: favourite
    });

    this.props.handleChange(favourite);
  }

  render() {
    // I'm going to be honest. I originally had teams in a json file, with a for loop to populate this list. Let's be real though, how often do teams change? What is the benefit of making it generated.
    // You end up wasting an ajax call then a for loop to generate a list that will change once every 10 years.
    return (
      <div className="favouritePicker">
        <h2>Select a favourite team</h2>
        <select className="select" name="favourite" value={this.state.favourite} onChange={this.handleChange}>
          <option value="LAA">Angels</option>
          <option value="HOU">Astros</option>
          <option value="OAK">Athletics</option>
          <option value="TOR">Blue Jays</option>
          <option value="ATL">Braves</option>
          <option value="MIL">Brewers</option>
          <option value="STL">Cardinals</option>
          <option value="CHC">Cubs</option>
          <option value="LAD">Dodgers</option>
          <option value="ARI">D-backs</option>
          <option value="SF">Giants</option>
          <option value="CLE">Indians</option>
          <option value="SEA">Mariners</option>
          <option value="MIA">Marlins</option>
          <option value="NYM">Mets</option>
          <option value="WSH">Nationals</option>
          <option value="BAL">Orioles</option>
          <option value="SD">Padres</option>
          <option value="PHI">Phillies</option>
          <option value="PIT">Pirates</option>
          <option value="TEX">Rangers</option>
          <option value="TB">Rays</option>
          <option value="BOS">Red Sox</option>
          <option value="CIN">Reds</option>
          <option value="COL">Rockies</option>
          <option value="KC">Royals</option>
          <option value="DET">Tigers</option>
          <option value="MIN">Twins</option>
          <option value="CWS">White Sox</option>
          <option value="NYY">Yankees</option>
        </select>
      </div>
    );
  }
}

export default FavouritePicker;
