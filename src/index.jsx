'use strict';
/* ============
index.jsx
This injects the app
============ */

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from 'components/App.jsx';

// Stylesheets
import './sass/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
