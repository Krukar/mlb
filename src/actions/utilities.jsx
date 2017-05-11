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
  return ajax.get('http://gd2.mlb.com/components/game/mlb/year_2017/month_05/day_09/master_scoreboard.json').then(function(response){
    return response
  })
}

/* ============
getToday
Returns today as a string in HTML5 input date format YYYY-MM-DD
============ */
export function getYYYYMMDD(){
  let date = new Date();
  let YYYY = date.getFullYear();
  let MM = ('0' + (date.getMonth() + 1)).slice(-2); // getMonth() can return a single digit and starts at 0. Add 1 then a '0' to the front then slice the last 2 chars
  let DD = ('0' + date.getDate()).slice(-2); // getDate() can return a single digie so add a '0' to the front then slice the last 2 chars

  let today = YYYY + '-' + MM + '-' + DD

  return today;
}
