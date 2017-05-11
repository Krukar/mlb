'use strict';
/* ============
ajax.jsx
Ajax calls are done through here
============ */

// Third Party Libraries
import 'whatwg-fetch';

/* ============
The Ajax call to our API
Requires a url
============ */
export function get(url){
  return fetch(url).then(function(response){
    return response.json()
  }).then(function(response){
    return response
  })
}
