import React, { Component } from 'react';
import './App.css';

import TodoBottomBar from './TodoBottomBar';
import TodoFrom from './TodoForm';
import TodoTopBar from './TodoTopBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{flex: 1}}>
          <TodoTopBar />
        </div>
        <div style={{flex: 3}}>
          <TodoFrom />
        </div>
        <div style={{flex: 1}}>
          <TodoBottomBar />
        </div>
      </div>
    );
  }
}

export default App;
