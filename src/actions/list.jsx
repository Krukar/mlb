'use strict';
/* ============
list.jsx
Utility functions that are used on the list page
============ */

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Actions
import * as ajax from 'actions/ajax.jsx';

/* ============
get
- Takes a YYYY-MM-DD and returns the games for that day
- To Debug load http://gd2.mlb.com/components/game/mlb/year_2017/month_05/day_09/master_scoreboard.json which corresponds to assets/may09mlb.jpg
============ */
export const get = date =>{
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
games
- Takes an array of games and a favourite team and returns a rendered list with the favourite team on top
============ */
export const games = (array, favourite) =>{
  // The API returns an object instead of an array if only 1 game was played. This check will bypass the reduce if that happens
  if(!Array.isArray(array)){
    return game(array);
  }

  return array.reduce((acc, value) =>{
    if(value.home_name_abbrev === favourite || value.away_name_abbrev === favourite){
      acc.unshift(game(value, favourite));
    }
    else{
      acc.push(game(value));
    }
    return acc;
  }, []);
}

/* ============
game
- Takes a game object and returns either a div or a link
============ */
export const game = (game, favourite) =>{
  if(!game.linescore){
    return (
      <div className="game" key={game.gameday}>
        <div className="home">
          <div className="team">
            <span className={"name" + (game.linescore && game.linescore.r.home > game.linescore.r.away ? ' winner' : '') + (favourite === game.home_name_abbrev ? ' favourite' : '')}>{game.home_team_name}</span>
            <span className="city">{game.home_team_city}</span>
          </div>
        </div>
        <div className="away">
          <div className="team">
            <span className={"name" + (game.linescore && game.linescore.r.away > game.linescore.r.home ? ' winner' : '') + (favourite === game.away_name_abbrev ? ' favourite' : '')}>{game.away_team_name}</span>
            <span className="city">{game.away_team_city}</span>
          </div>
        </div>
        <div className="status">{game.status.status}</div>
      </div>
    )
  }

  return (
    <div className="game" key={game.gameday}>
      <Link to={'/details/' + game.gameday}>
        <div className="home">
          <div className="team">
            <span className={"name" + (game.linescore && game.linescore.r.home > game.linescore.r.away ? ' winner' : '') + (favourite === game.home_name_abbrev ? ' favourite' : '')}>{game.home_team_name}</span>
            <span className="city">{game.home_team_city}</span>
          </div>
          <span className="score">{game.linescore ? game.linescore.r.home : null}</span>
        </div>
        <div className="away">
          <div className="team">
            <span className={"name" + (game.linescore && game.linescore.r.away > game.linescore.r.home ? ' winner' : '') + (favourite === game.away_name_abbrev ? ' favourite' : '')}>{game.away_team_name}</span>
            <span className="city">{game.away_team_city}</span>
          </div>
          <span className="score">{game.linescore ? game.linescore.r.away : null}</span>
        </div>
        <div className="status">{game.status.status}</div>
      </Link>
    </div>
  )
}
