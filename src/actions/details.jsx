'use strict';
/* ============
details.jsx
Utility functions that are used on the details page
============ */

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Actions
import * as ajax from 'actions/ajax.jsx';

/* ============
get
- Takes a mlb guid and returns data for a specific game
============ */
export const get = id =>{
  let split = id.split('_');
  let url = 'http://gd2.mlb.com/components/game/mlb/year_' + split[0] + '/month_' + split[1] + '/day_' + split[2] + '/gid_' + id + '/boxscore.json';

  return ajax.get(url).then(response =>{
    if(!response.data.boxscore){
      throw 'There was a problem loading the data, please try again'
    }

    return response.data.boxscore;
  });
}

/* ============
innings
- Takes a score object and renders home and away inning divs
============ */
export const innings = data =>{
  if(!data){
    return null
  }

  let home = inning(data.linescore, 'home', data.home_sname);
  let away = inning(data.linescore, 'away', data.away_sname);

  return (
    <div className="container">
      <div className="header">
        <div className="inning">1</div>
        <div className="inning">2</div>
        <div className="inning">3</div>
        <div className="inning">4</div>
        <div className="inning">5</div>
        <div className="inning">6</div>
        <div className="inning">7</div>
        <div className="inning">8</div>
        <div className="inning">9</div>
        <div className="stat">R</div>
        <div className="stat">H</div>
        <div className="stat">E</div>
      </div>
      {home}
      {away}
    </div>
  )
}

/* ============
inning
- Takes data and home or away and renders inning row
============ */
export const inning = (linescore, team, name) =>{
  let scores = [];
  for(let [index, value] of linescore.inning_line_score.entries()){
    scores.push(<div className="inning" key={value.inning}>{value[team]}</div>);
  }

  return(
    <div className={team}>
      <div className="team">{name}</div>
      {scores}
      <div className="stat">{linescore[team + '_team_runs']}</div>
      <div className="stat">{linescore[team + '_team_hits']}</div>
      <div className="stat">{linescore[team + '_team_errors']}</div>
    </div>
  )
}

/* ============
batters
- Takes data and returns list of batters
============ */
export const players = data =>{
  if(!data){
    return null
  }

  let batters = [];
  for(let [index, value] of data.batter.entries()){
    batters.push(
      <div className="player" key={index}>
        <div className="name">{value.name}</div>
        <div className="stat">{value.ab}</div>
        <div className="stat">{value.r}</div>
        <div className="stat">{value.h}</div>
        <div className="stat">{value.rbi}</div>
        <div className="stat">{value.bb}</div>
        <div className="stat">{value.so}</div>
        <div className="stat">{value.avg}</div>
      </div>
    );
  }

  return(
    <div className="batters">
      <div className="header">
        <div className="name">Name</div>
        <div className="stat">AB</div>
        <div className="stat">R</div>
        <div className="stat">H</div>
        <div className="stat">RBI</div>
        <div className="stat">BB</div>
        <div className="stat">SO</div>
        <div className="stat">AVG</div>
      </div>
      {batters}
    </div>
  )
}
