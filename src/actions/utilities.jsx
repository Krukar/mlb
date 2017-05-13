'use strict';
/* ============
utilities.jsx
Utility functions that can be used throughout the app
============ */

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Actions
import * as ajax from 'actions/ajax.jsx';

/* ============
createList
- Takes an array of games and a favourite team and returns a rendered list with the favourite team on top
============ */
export const createList = (array, favourite) =>{
  // The API returns an object instead of an array if only 1 game was played. This check will bypass the reduce if that happens
  if(!Array.isArray(array)){
    return createGame(array);
  }

  return array.reduce((acc, game) =>{
    if(game.home_team_name === favourite || game.away_team_name === favourite){
      acc.unshift(createGame(game));
    }
    else{
      acc.push(createGame(game));
    }
    return acc;
  }, []);
}

/* ============
createGame
- Takes a game object and returns either a div or a link
============ */
export const createGame = (game) =>{
  if(!game.linescore){
    return gameDiv(game);
  }

  return gameLink(game);
}

/* ============
gameDiv
- Takes a game object and an index and returns a react rendered HTML div of that game
============ */
export const gameDiv = (game) =>{
  return (
    <div className="game" key={game.gameday}>
      <div className="home">
        {game.home_team_name}
      </div>
      <div className="away">
        {game.away_team_name}
      </div>
      <div className="status">{game.status.status}</div>
    </div>
  )
}

/* ============
gameLink
- Takes a game object that has a linescore and a key and returns a react rendered HTML div of that game with a link to details page and winner
============ */
export const gameLink = (game) =>{
  return (
    <div className="game" key={game.gameday}>
      <Link to={'/details/' + game.gameday}>
        <div className={"home" + (game.linescore && game.linescore.r.home > game.linescore.r.away ? ' winner' : '')}>
          {game.home_team_name}
          <span className="score">{game.linescore ? game.linescore.r.home : null}</span>
        </div>
        <div className={"away" + (game.linescore && game.linescore.r.away > game.linescore.r.home ? ' winner' : '')}>
          {game.away_team_name}
          <span className="score">{game.linescore ? game.linescore.r.away : null}</span>
        </div>
        <div className="status">{game.status.status}</div>
      </Link>
    </div>
  )
}

/* ============
getList
- Takes a YYYY-MM-DD and returns the games for that day
- To Debug load http://gd2.mlb.com/components/game/mlb/year_2017/month_05/day_09/master_scoreboard.json which corresponds to assets/may09mlb.jpg
============ */
export const getList = date =>{
  let split = date.split('-');
  let url = 'http://gd2.mlb.com/components/game/mlb/year_' + split[0] + '/month_' + split[1] + '/day_' + split[2] + '/master_scoreboard.json';

  return ajax.get(url).then(response =>{
    if(!response.data.games.game){
      throw 'No Games Today';
    }

    return response.data.games.game;
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
