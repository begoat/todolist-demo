import React, { Component } from 'react';

import { Button } from 'rsuite';

import CheckIcon from '../svgicons/CheckIcon';
import DeleteIcon from '../svgicons/DeleteIcon';

import './TodoEntity.less';

class TodoEntity extends Component {
  constructor() {
    super();
    this.state = {hoverd: false};
  }

  render() {
    const { 
      createTime, 
      id,
      title, 
      status, 
      changeEntityStatus,
    } = this.props;

    return (
      <div
        className={`${status === 1 ? "complete" : ""} ToDoEntity`}
        onMouseEnter={() => this.setHoverState(true)}
        onMouseLeave={() => this.setHoverState(false)}
      >
        <div style={{flex: 6}}>
          <div className="ToDoEntity-Checkbox">
            {
              status === 0 ? <CheckIcon handleClick={() => changeEntityStatus(id, 1)} checked={false}/> : 
                status === 1 ? <CheckIcon handleClick={() => changeEntityStatus(id, 0)} checked={true}/> :
                  null
            }
          </div>
          <span className={status === 2 ? 'deleted' : ''}>{title}</span>
        </div>
        <span style={{flex: 3}} className={status === 2 ? 'deleted' : ''}>{createTime}</span>
        <div style={{flex: 1}}>
          {
            status !== 2 && <Button size="xs" onClick={() => changeEntityStatus(id, 2)}>删除</Button>
          }
        </div>
      </div>
    );
  }

  setHoverState = (state) => {
    this.setState({hoverd: state});
  }  
}

export default TodoEntity;
