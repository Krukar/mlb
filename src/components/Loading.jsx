/* ============
Loading.jsx
Generic loading animation
============ */

// React
import React, { Component } from 'react';

// Libraries
import {TweenMax} from 'gsap';

class Loading extends Component{
  render() {
    return (
      <div className="loading">
        Loading Animation
      </div>
    );
  }
}

export default Loading;
