import React, { Component } from 'react';

import 'rsuite/dist/styles/rsuite.min.css';

import { connect } from 'react-redux';
import * as actions from './actions/index';

import { Toggle } from 'rsuite';

class TodoBottomBar extends Component {
  render() {
    const { showStatus, changeShowStatus } = this.props;
    return (
      <React.Fragment>
        <Toggle
          checked={[7, 6, 5, 4].includes(showStatus)}
          checkedChildren="显示 进行中的"
          onChange={() => this.handleActiveChange(showStatus, changeShowStatus)}
          size="lg"
          unCheckedChildren="不显示 进行中的"
        />
        <Toggle
          checked={[7, 6, 3, 2].includes(showStatus)}
          checkedChildren="显示 完成的"
          onChange={() => this.handleCompleteChange(showStatus, changeShowStatus)}
          size="lg"
          unCheckedChildren="不显示 完成的"
        />
        <Toggle
          checked={[7, 5, 3, 1].includes(showStatus)}
          checkedChildren="显示 删除的"
          onChange={() => this.handleDeleteChange(showStatus, changeShowStatus)}
          size="lg"
          unCheckedChildren="不显示 删除的"
        />
      </React.Fragment>
    );
  }

  handleActiveChange = (showStatus, changeShowStatus) => {
    if ([7, 6, 5, 4].includes(showStatus)) {
      changeShowStatus(showStatus - 4);
    } else {
      changeShowStatus(showStatus + 4);
    }
  }

  handleCompleteChange = (showStatus, changeShowStatus) => {
    if ([7, 6, 3, 2].includes(showStatus)) {
      changeShowStatus(showStatus - 2);
    } else {
      changeShowStatus(showStatus + 2);
    }
  }

  handleDeleteChange = (showStatus, changeShowStatus) => {
    if ([7, 5, 3, 1].includes(showStatus)) {
      changeShowStatus(showStatus - 1);
    } else {
      changeShowStatus(showStatus + 1);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    showStatus: state.system.showStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeShowStatus: (value) => dispatch(actions.changeShowStatus(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBottomBar);
