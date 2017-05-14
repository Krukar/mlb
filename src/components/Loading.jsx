/* ============
Loading.jsx
Generic loading animation
============ */

// Libraries
import {TweenMax} from 'gsap';

// React
import React, { Component } from 'react';

class Loading extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loading">
        Loading Animation
      </div>
    );
  }
}

export default Loading;
