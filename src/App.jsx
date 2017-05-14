/* ============
App.jsx
Our main React app
============ */

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

// Views
import Details from 'views/Details.jsx';
import List from 'views/List.jsx';

class App extends Component{
  constructor(props){
    super(props);

    console.log('app.jsx init');
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
          <Route exact path="/" component={List}/>
          <Route path="/list/:date" component={List}/>
          <Route path="/details/:id" component={Details}/>
          <Redirect from="*" to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
