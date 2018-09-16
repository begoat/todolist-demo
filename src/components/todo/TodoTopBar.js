import React, { Component } from 'react';
import { InputGroup, Input, Icon, Alert } from 'rsuite';
import AddIcon from '../../assets/add.svg';
import SettingIcon from '../../assets/setting.svg';
import ViewSetting from './SettingBar';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './TodoTopBar.less';

class ToDoTopBar extends Component {
  constructor() {
    super();
    this.titleRegex = new RegExp("^[\\u4e00-\\u9fa5a-zA-Z0-9]{1,30}$");
    this.state = {
      title: '',
      showSetting: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <header className="ToDoTop-header">
          <div className="ToDoTop">
            <span className="ToDoTop-title">
              ToDoList
            </span>
            <InputGroup className="ToDoTop-input">
              <Input
                autoFocus={true}
                placeholder="在这儿输入你的ToDo (回车或者点击右边图标确认)"
                value={this.state.title}
                onChange={this.handleTitleChange}
                onKeyPress={this.handleEnterPressed}
              />
              <InputGroup.Button
                onClick={this.handleAddClick}
                className="ToDoTop-button"
              >
                <Icon icon={AddIcon} svgStyle={{fill: 'rgba(47,47,47,0.98)'}} />
              </InputGroup.Button>
              <InputGroup.Button 
                className="ToDoTop-button"
                onClick={this.setShowSetting}
              >
                <Icon icon={SettingIcon} svgStyle={{fill: 'rgba(47,47,47,0.98)'}} className="ToDoTop-icon"/>
              </InputGroup.Button>
            </InputGroup>
          </div>
        </header>
        <div className={!this.state.showSetting ? 'setting-hidden' : ''}>
          <ViewSetting />
        </div>
      </React.Fragment>
    );
  }

  setShowSetting = () => {
    this.setState((prevState) => {
      return {
        showSetting: !prevState.showSetting
      }
    });
  }

  handleAddClick = () => {
    if (this.titleRegex.test(this.state.title)) {
      this.props.addNewEntity(this.state.title);
      this.setState({
        title: ''
      });

    } else {
      Alert.warning('标题只能含有汉字英文字母数字,且长度大于0且小于30个字符哦 :)');
    }
  }

  handleEnterPressed = (event) => {
    if (event.key === 'Enter') {
      this.handleAddClick();
    }
  }

  handleTitleChange = (value) => {
    this.setState({
      title: value
    });
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

export default connect(mapStateToProps, mapDispatchToProps)(ToDoTopBar);
