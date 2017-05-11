'use strict';
/* ============
List.jsx
List view of games for a specific day
============ */

// React
import React, { Component } from 'react';

// Actions
import * as utilities from 'actions/utilities.jsx'

class List extends Component{
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    utilities.getList('2017-05-09').then(function(response){
      console.log('ajax get worked')
      console.log(response)
    })
  }

  render() {
    return (
      <div className="list">
        the list
      </div>
    );
  }
}

export default List;
