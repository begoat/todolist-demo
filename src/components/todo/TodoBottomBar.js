import React, { Component } from 'react';
import { Toggle, InputGroup, Input, Icon, Alert } from 'rsuite';

import { connect } from 'react-redux';
import * as actions from '../../actions';


class TodoBottomBar extends Component {
  constructor() {
    super();
    this.state = {newTitle: ''};
  }
  
  render() {
    const {
      showActive,
      showComplete,
      showDeleted,
      changeShowStatus 
    } = this.props;

    return (
      <React.Fragment>
        <div>
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
        <InputGroup>
          <Input
            value={this.state.newTitle}
            onChange={this.handleNewTitleChange}
          />
          <InputGroup.Button onClick={this.handleAddNewClick}>
            <Icon icon="search" />
          </InputGroup.Button>
        </InputGroup>
      </React.Fragment>
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

  handleNewTitleChange = (value) => {
    this.setState({
      newTitle: value
    });
  }

  handleAddNewClick = () => {
    if (this.state.newTitle !== '') {
      this.props.addNewEntity(this.state.newTitle);
      this.setState({
        newTitle: ''
      });
    } else {
      Alert.warning('标题不为空');
    }
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
    addNewEntity: (title) => dispatch(actions.addNewEntity(title)),
    changeShowStatus: (target, value) => dispatch(actions.changeShowStatus(target, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBottomBar);
