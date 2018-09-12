import React, { Component } from 'react';

import 'rsuite/dist/styles/rsuite.min.css';

import QueryInput from './QueryInput';
import TodoEntity from './TodoEntity';

import { connect } from 'react-redux';
import * as actions from './actions/index';

class TodoForm extends Component {
  render() {
    let { entityList, changeEntityStatus, queryStr } = this.props;
    if (!entityList) {
      entityList = [];
    }

    return (
      <div>
        <QueryInput />
        {
          entityList
            .filter((entity) => entity.title.includes(queryStr))
            .map((entity, index) => {
              return (
                <TodoEntity 
                  key={index} 
                  {...entity}
                  index={index}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeEntityStatus: (index, status) => dispatch(actions.changeEntityStatus(index, status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
