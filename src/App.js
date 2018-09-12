import React, { Component } from 'react';
import './App.css';

import TodoFrom from './TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoFrom />
      </div>
    );
  }
}

export default App;
