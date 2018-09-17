import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import LoginComponent from './login';
import NotFound from './others/NotFound';
import ToDoMain from './todo';
import { AuthHOC } from '../utils/AuthHOC';
import EditToDo from './todo/EditToDo';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" render={() => <Redirect to="/main"/>} />
        <Route path="/login" component={LoginComponent} />
        <Route exact path="/main" component={AuthHOC(ToDoMain)}/>
        <Route path="/edit/:id" component={EditToDo}/>
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
