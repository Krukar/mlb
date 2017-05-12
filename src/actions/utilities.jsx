'use strict';
/* ============
utilities.jsx
Utility functions that can be used throughout the app
============ */

// React
import React, { Component } from 'react';

// Actions
import * as ajax from 'actions/ajax.jsx'

/* ============
createList
- Takes an array of games and a favourite team and returns a rendered list with the favourite team on top
============ */
export const createList = (array, favourite) =>{
  return array.reduce((acc, game, i) =>{
    if(game.home_team_name === favourite || game.away_team_name === favourite){
      acc.unshift(createDiv(game, i));
    }
    else{
      acc.push(createDiv(game, i));
    }
    return acc;
  }, []);
}

/* ============
createDiv
- Takes a game object and an index and returns a react rendered HTML div of that game
============ */
export const createDiv = (game, i) =>{
  return (
    <div className="game" key={i}>
      {/* Ternary is required since games that have not been played do not have a linescore entry */}
      <div className={"home" + (game.linescore && game.linescore.r.home > game.linescore.r.away ? ' winner' : '')}>
        {game.home_team_name}
        <span className="score">{game.linescore ? game.linescore.r.home : null}</span>
      </div>
      <div className={"away" + (game.linescore && game.linescore.r.away > game.linescore.r.home ? ' winner' : '')}>
        {game.away_team_name}
        <span className="score">{game.linescore ? game.linescore.r.away : null}</span>
      </div>
      <div className="status">{game.status.status}</div>
    </div>
  )
}


/* ============
getList
- Takes a YYYY-MM-DD and returns the games for that day
- To Debug load http://gd2.mlb.com/components/game/mlb/year_2017/month_05/day_09/master_scoreboard.json which corresponds to assets/may09mlb.jpg
============ */
export const getList = date =>{
  let split = date.split('-')
  let url = 'http://gd2.mlb.com/components/game/mlb/year_' + split[0] + '/month_' + split[1] + '/day_' + split[2] + '/master_scoreboard.json';

  return ajax.get(url).then(response =>{
    if(!response.game){
      return 'No Games Today'
    }

    return Array.isArray(response.game) ? response.game : [response.game]
  });
}

/* ============
getToday
Takes a date object and retr a string in HTML5 input date format YYYY-MM-DD
============ */
export const getYYYYMMDD = date =>{

  let YYYY = date.getFullYear();
  let MM = ('0' + (date.getMonth() + 1)).slice(-2); // getMonth() can return a single digit and starts at 0. Add 1 then a '0' to the front then slice the last 2 chars
  let DD = ('0' + date.getDate()).slice(-2); // getDate() can return a single digie so add a '0' to the front then slice the last 2 chars

  let today = YYYY + '-' + MM + '-' + DD

  return today;
}
