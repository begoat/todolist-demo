import React, { Component } from 'react';
import './App.css';

import TodoBottomBar from './TodoBottomBar';
import TodoFrom from './TodoForm';
import TodoTopBar from './TodoTopBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoTopBar />
        <TodoFrom />
        <TodoBottomBar />
      </div>
    );
  }
}

export default App;
