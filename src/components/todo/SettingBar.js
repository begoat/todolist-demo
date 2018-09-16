import React, { Component } from 'react';
import { Toggle } from 'rsuite';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import './SettingBar.less';

class SettingBar extends Component {
  render() {
    const {
      showActive,
      showComplete,
      showDeleted,
      changeShowStatus 
    } = this.props;

    return (
      <div className="SettingBar">
        <Toggle
          checked={showActive}
          checkedChildren="显示 进行中的"
          onChange={() => this.handleActiveChange(changeShowStatus)}
          size="lg"
          unCheckedChildren="不显示 进行中的"
        />
        <Toggle
          checked={showComplete}
          checkedChildren="显示 完成的"
          onChange={() => this.handleCompleteChange(changeShowStatus)}
          size="lg"
          unCheckedChildren="不显示 完成的"
        />
        <Toggle
          checked={showDeleted}
          checkedChildren="显示 删除的"
          onChange={() => this.handleDeleteChange(changeShowStatus)}
          size="lg"
          unCheckedChildren="不显示 删除的"
        />
      </div>
    );
  }

  handleActiveChange = (changeShowStatus) => {
    changeShowStatus('showActive', !this.props.showActive)
  }

  handleCompleteChange = (changeShowStatus) => {
    changeShowStatus('showComplete', !this.props.showComplete)
  }

  handleDeleteChange = (changeShowStatus) => {
    changeShowStatus('showDeleted', !this.props.showDeleted)
  }
}

const mapStateToProps = (state) => {
  return {
    showActive: state.system.showActive,
    showComplete: state.system.showComplete,
    showDeleted: state.system.showDeleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeShowStatus: (target, value) => dispatch(actions.changeShowStatus(target, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingBar);
