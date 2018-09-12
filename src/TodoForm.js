import React, { Component } from 'react';

import 'rsuite/dist/styles/rsuite.min.css';

import QueryInput from './QueryInput';
import TodoEntity from './TodoEntity';

import { connect } from 'react-redux';
// import * as actions from './actions';

class TodoForm extends Component {
  render() {
    let { entityList } = this.props;
    if (!entityList) {
      entityList = [];
    }

    return (
      <div>
        <QueryInput />
        {
          entityList.map((entity, index) => {
            return <TodoEntity key={index} {...entity}/>;
          })  
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    entityList: state.demo.entityList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
