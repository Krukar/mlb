/* ============
App.jsx
Our main React app
============ */

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// Actions
import * as utilities from 'actions/utilities.jsx'

// Components
import DatePicker from 'components/DatePicker.jsx';
import Loading from 'components/Loading.jsx';

// Views
import List from 'views/List.jsx';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
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
      <Router>
        <div className="app">
          <DatePicker handleChange={this.setDate}></DatePicker>
          {this.state.loading &&
            <Loading></Loading>
          }
          {this.state.error &&
            <div className="error">
              {this.state.error}
            </div>
          }
          {this.state.games &&
            <List games={this.state.games} favourite={this.state.favourite}></List>
          }
        </div>
      </Router>
    );
  }
}

export default App;
