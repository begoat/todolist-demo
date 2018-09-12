import React, { Component } from 'react';
import './App.css';

import TodoFrom from './TodoForm';
import TodoBottomBar from './TodoBottomBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoFrom />
        <TodoBottomBar />
      </div>
    );
  }
}

export default App;
