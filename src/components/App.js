import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import TodoBottomBar from './todo/TodoBottomBar';
import TodoFrom from './todo/TodoForm';
import TodoTopBar from './todo/TodoTopBar';
import LoginComponent from './login';
import NotFound from './others/NotFound';
import { AuthHOC } from '../utils/AuthHOC';

import 'rsuite/styles/less/index.less';

import './App.less';

const MainApp = () => {
  return(
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

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" render={() => <Redirect to="/main"/>} />
        <Route path="/login" component={LoginComponent} />
        <Route exact path="/main" component={AuthHOC(MainApp)}/>
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
