import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <h>Hey</h>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
