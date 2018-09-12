import React, { Component } from 'react';
import { InputGroup, Input, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite.min.css';

import { connect } from 'react-redux';
import * as actions from './actions/index';

class QueryInput extends Component {
  render() {
    const { queryStr, changeQueryStr } = this.props;
    return (
      <InputGroup>
        <Input
          value={queryStr}
          onChange={changeQueryStr}
          placeholder="type the title of todo-entity you want to search"
        />
        <InputGroup.Button>
          <Icon icon="search" />
        </InputGroup.Button>
      </InputGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    queryStr: state.system.queryStr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeQueryStr: (value) => dispatch(actions.changeQueryStr(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryInput);
