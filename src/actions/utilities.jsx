'use strict';
/* ============
utilities.jsx
Utility functions that can be used throughout the app
============ */

// Actions
import * as ajax from 'actions/ajax.jsx'

/* ============
getList
- Takes a YYYY-MM-DD and returns the games for that day
- To Debug load http://gd2.mlb.com/components/game/mlb/year_2017/month_05/day_09/master_scoreboard.json which corresponds to assets/may09mlb.jpg
============ */
export function getList(date){
  let split = date.split('-')
  let url = 'http://gd2.mlb.com/components/game/mlb/year_' + split[0] + '/month_' + split[1] + '/day_' + split[2] + '/master_scoreboard.json';

  return ajax.get(url).then(function(response){
    return response
  })
}

/* ============
getToday
Takes a date object and retr a string in HTML5 input date format YYYY-MM-DD
============ */
export function getYYYYMMDD(date){
  let YYYY = date.getFullYear();
  let MM = ('0' + (date.getMonth() + 1)).slice(-2); // getMonth() can return a single digit and starts at 0. Add 1 then a '0' to the front then slice the last 2 chars
  let DD = ('0' + date.getDate()).slice(-2); // getDate() can return a single digie so add a '0' to the front then slice the last 2 chars

  let today = YYYY + '-' + MM + '-' + DD

  return today;
}
