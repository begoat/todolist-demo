import React, { Component } from 'react';

import TodoFrom from './TodoForm';
import TodoTopBar from './TodoTopBar';

import './index.less';

const MainApp = () => {
  return(
    <div className="ToDoMain">
      <TodoTopBar />
      <TodoFrom />
    </div>
  );
}

export default MainApp;
