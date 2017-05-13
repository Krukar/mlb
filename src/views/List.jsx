'use strict';
/* ============
List.jsx
List view of games for a specific day
============ */

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Actions
import * as utilities from 'actions/utilities.jsx';

// Components
import DatePicker from 'components/DatePicker.jsx';
import Games from 'components/Games.jsx';
import Loading from 'components/Loading.jsx';

class List extends Component{
  constructor(props) {
    super(props);

    this.state = {
      date: this.props.match.params.date ? this.props.match.params.date : utilities.getYYYYMMDD(new Date()),
      error: false,
      favourite: 'Blue Jays',
      games: undefined,
      loading: true
    }
  }

  reset = () =>{
    // When a new date is set: Remove any errors, clear the list and set it to loading
    this.setState({
      error: false,
      games: undefined,
      loading: true
    });
  }

  setDate = (date) => {
    this.reset();

    utilities.getList(date).then(response =>{
      // A list of games was successfully returned
      this.setState({
        error: false,
        games: response,
        loading: false
      });

      // Push the url to allow linking to specific days only after a success
      this.props.history.push('/list/' + date);
    }).catch(error =>{
      // If a list of games is not available for any reason it will throw an error
      this.setState({
        error: error,
        games: undefined,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="list">
        <DatePicker handleChange={this.setDate} date={this.state.date}></DatePicker>
        {this.state.loading &&
          <Loading></Loading>
        }
        {this.state.error &&
          <div className="error">
            {this.state.error}
          </div>
        }
        {this.state.games &&
          <Games games={this.state.games} favourite={this.state.favourite}></Games>
        }
      </div>
    );
  }
}

export default List;
