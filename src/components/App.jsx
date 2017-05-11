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
import List from 'views/List.jsx';

class App extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    let today = new Date();
    let date = utilities.getYYYYMMDD(today);

    this.state = {
      date: date
    };
  }

  setDate = (event) => {
    let date = event.target.value;

    utilities.getList(date).then(response => {
      this.setState({
        games: response.data.games
      });

      console.log(this.state)
    });
  }

  render() {
    return (
      <div className="app">
        <DatePicker value={this.state.date} handleChange={this.setDate}></DatePicker>
        <List value={this.state.date}></List>
      </div>
    );
  }
}

export default App;
