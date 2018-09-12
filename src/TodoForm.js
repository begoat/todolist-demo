import React, { Component } from 'react';

import 'rsuite/dist/styles/rsuite.min.css';

import QueryInput from './QueryInput';
import TodoEntity from './TodoEntity';

import { connect } from 'react-redux';
import * as actions from './actions/index';

class TodoForm extends Component {
  render() {
    let { entityList } = this.props;
    const { 
      changeEntityStatus, 
      queryStr,
      showActive,
      showComplete,
      showDeleted,
    } = this.props;
    if (!entityList) {
      entityList = [];
    }

    return (
      <div>
        <QueryInput />
        {
          entityList
            .filter((entity) => entity.title.includes(queryStr))
            .filter((entity) => {
              if (entity.status === 0) {
                return showActive;
              } else if (entity.status === 1) {
                return showComplete;
              } else if (entity.status === 2) {
                return showDeleted;
              }

              return false;
            })
            .map((entity, index) => {
              return (
                <TodoEntity 
                  key={index} 
                  {...entity}
                  changeEntityStatus={changeEntityStatus}
                />
              );
            })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    entityList: state.demo.entityList,
    queryStr: state.system.queryStr,
    showActive: state.system.showActive,
    showComplete: state.system.showComplete,
    showDeleted: state.system.showDeleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeEntityStatus: (index, status) => dispatch(actions.changeEntityStatus(index, status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
