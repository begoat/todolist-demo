import React, { Component } from 'react';

export default class App extends Component {
  render () {
    const test = {1: 2, 2: 3};
    console.log({...test, 2: 4});
    return (
      <p>This is my new react app</p>
    );
  }
}
