'use strict';
/* ============
utilities.jsx
Utility functions that can be used throughout the app
============ */

/* ============
convertToYYYYMMDD
Takes a date object and retr a string in HTML5 input date format YYYY-MM-DD
============ */
export const convertToYYYYMMDD = date =>{
  let YYYY = date.getFullYear();
  let MM = ('0' + (date.getMonth() + 1)).slice(-2); // getMonth() can return a single digit and starts at 0. Add 1 then a '0' to the front then slice the last 2 chars
  let DD = ('0' + date.getDate()).slice(-2); // getDate() can return a single digie so add a '0' to the front then slice the last 2 chars

  let today = YYYY + '-' + MM + '-' + DD;

  return today;
}

/* ============
favourite
Checks localstorage to see if a person already selected a favourite
============ */
export const favourite = () =>{
  let favourite = localStorage.getItem('favourite') ? JSON.parse(localStorage.getItem('favourite')) : 'TOR';

  return favourite;
}
