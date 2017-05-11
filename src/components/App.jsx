/* ============
App.jsx
Our main React app
============ */

// React
import React, { Component } from 'react';

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
      games: undefined,
      favourite: 'Blue Jays'
    }
  }

  setDate = (date) => {
    utilities.getList(date).then(response =>{
      this.setState({
        games: response.game ? response.game : undefined
      });
      console.log(this.state)
    });
  }

  render() {
    return (
      <div className="app">
        <DatePicker handleChange={this.setDate}></DatePicker>
        {this.state.games ?
          <List games={this.state.games} favourite={this.state.favourite}></List>
          : <Loading></Loading>
        }
      </div>
    );
  }
}

export default App;
