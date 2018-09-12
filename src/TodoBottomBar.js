import React, { Component } from 'react';

import 'rsuite/dist/styles/rsuite.min.css';

import { connect } from 'react-redux';
import * as actions from './actions/index';

class TodoBottomBar extends Component {
  render() {
    return (
      <div>s</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBottomBar);
