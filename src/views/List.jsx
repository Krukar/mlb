'use strict';
/* ============
List.jsx
List view of games for a specific day
============ */

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Actions
import * as list from 'actions/list.jsx';
import * as utilities from 'actions/utilities.jsx';

// Components
import DatePicker from 'components/DatePicker.jsx';
import FavouritePicker from 'components/FavouritePicker.jsx';
import Games from 'components/Games.jsx';
import Loading from 'components/Loading.jsx';

class List extends Component{
  constructor(props) {
    super(props);

    this.state = {
      date: this.props.match.params.date ? this.props.match.params.date : utilities.convertToYYYYMMDD(new Date()),
      error: false,
      favourite: utilities.favourite(),
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

    // If they cleared the input
    if(!date){
      this.setState({
        error: 'Please select a date',
        games: undefined,
        loading: false
      });

      return
    }

    list.get(date).then(response =>{
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

  setFavourite = (favourite) =>{
    this.setState({
      favourite: favourite
    });

    localStorage.setItem('favourite', JSON.stringify(favourite));
  }

  error = () =>{
    if(!this.state.error){
      return null;
    }

    return(
      <div className="error">
        {this.state.error}
      </div>
    )
  }

  loading = () =>{
    if(!this.state.loading){
      return null;
    }

    return(
      <Loading></Loading>
    )
  }

  render() {
    let error = this.error();
    let loading = this.loading();

    return (
      <div className="list">
        <DatePicker date={this.state.date} handleChange={this.setDate}></DatePicker>
        <FavouritePicker favourite={this.state.favourite} handleChange={this.setFavourite}></FavouritePicker>
        {loading}
        {error}
        <Games games={this.state.games} favourite={this.state.favourite}></Games>
      </div>
    );
  }
}

export default List;
