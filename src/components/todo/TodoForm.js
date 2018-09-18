import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import TodoEntity from './TodoEntity';

import './ToDoForm.less';

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

    let activeList = [], completeList = [], deletedList = [];
    if (entityList) {
      entityList
        .filter((entity) => entity.title.includes(queryStr))
        // will it accect drag and drop if the data structure is like this
        .map((entity) => {
          if (entity.status === 0) {
            activeList.push(entity);
          } else if (entity.status === 1) {
            completeList.push(entity);
          } else if (entity.status === 2) {
            deletedList.push(entity);
          } else {
            console.log('weird status of the entity:', entity);
          }
        });
    }
    
    return (
      <div className="ToDoForm">
        { 
          showActive && 
          <div className="ToDoFormTitleBar">
            <span className="ToDoFormTitleText">进行中的({activeList.length})</span>
          </div>
        }
        {
          showActive && activeList.map((entity, index) => {
            return (
              <TodoEntity 
                key={index} 
                {...entity}
                changeEntityStatus={changeEntityStatus}
              />
            );
          })
        }
        { 
          showComplete &&
          <div className="ToDoFormTitleBar">
            <span className="ToDoFormTitleText">已完成的({completeList.length})</span>
          </div>
        }
        {
          showComplete && completeList.map((entity, index) => {
            return (
              <TodoEntity 
                key={index} 
                {...entity}
                changeEntityStatus={changeEntityStatus}
              />
            );
          })
        }
        { 
          showDeleted &&
          <div className="ToDoFormTitleBar">
            <span className="ToDoFormTitleText">已删除的({deletedList.length})</span>
          </div>
        }
        {
          showDeleted && deletedList.map((entity, index) => {
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
/*
<TodoEntity 
                  key={index} 
                  {...entity}
                  changeEntityStatus={changeEntityStatus}
                />
*/

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
