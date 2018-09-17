import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { 
  Form, 
  FormGroup, 
  ControlLabel, 
  Input, 
  HelpBlock, 
  SelectPicker, 
  Button, 
  ButtonToolbar, 
  Alert 
} from 'rsuite';

import { titleRegex } from '../../utils/index';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const data = [
  {
    label: '进行中',
    value: 0,
    role: 'Master'
  },
  {
    label: '已完成',
    value: 1,
    role: 'Master'
  },
  {
    label: '已删除',
    value: 2,
    role: 'Master'
  }
];

class EditToDo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      status: 0,
      createTime: ''
    }
  }

  componentDidMount() {
    this.props.entityList.map((entity) => {
      if (entity.id === this.props.match.params.id) {
        this.setState({
          title: entity.title,
          status: entity.status,
          createTime: entity.createTime
        })
      }
    })
  }

  render() {
    const { match } = this.props;
    return(
      <Form>
        <FormGroup>
          <ControlLabel>id</ControlLabel>
            {match.params.id}
        </FormGroup>
        <FormGroup>
          <ControlLabel>标题</ControlLabel>
          <Input value={this.state.title} onChange={this.handleTitleChange}/>
          <HelpBlock>请输入修改之后的标题</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>状态</ControlLabel>
          <SelectPicker
            value={this.state.status}
            onChange={this.handleStatusChange}
            data={data}
          />
          <HelpBlock>请输入修改之后的状态</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>创建时间</ControlLabel>
          <Input value={this.state.createTime} onChange={this.handleCreateTimeChange}/>
          <HelpBlock>请输入修改之后的时间</HelpBlock>
        </FormGroup>
        <ButtonToolbar>
          <Button appearance="primary" onClick={this.handleSubmit}>
            提交
          </Button>
          <Button onClick={() => this.props.history.push('/main')}>返回</Button>
        </ButtonToolbar>
      </Form>
    );
  }

  handleTitleChange = (value) => {
    this.setState({
      title: value
    });
  };

  handleStatusChange = (value) => {
    this.setState({
      status: value
    });
  };

  handleCreateTimeChange = (value) => {
    this.setState({
      createTime: value
    });
  };

  handleSubmit = () => {
    if (!titleRegex.test(this.state.title)) {
      Alert.warning('标题只能含有汉字英文字母数字,且长度大于0且小于30个字符哦 :)');
      return;
    }

    if (![0, 1, 2].includes(this.state.status)) {
      Alert.warning('不合法的状态');
      return;
    }
    
    this.props.changeEntityInfo(this.props.match.params.id ,this.state.title, this.state.status, this.state.createTime);
    Alert.success('修改成功');
    this.props.history.push('/main');
  }
}

const mapStateToProps = (state) => {
  return {
    entityList: state.demo.entityList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeEntityInfo: (id, title, status, createTime) => dispatch(actions.changeEntityInfo(id, title, status, createTime))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditToDo));
