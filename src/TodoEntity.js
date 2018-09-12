import React, { Component } from 'react';
import './TodoEntity.css';

import CheckIcon from './svgicons/CheckIcon';
import DeleteIcon from './svgicons/DeleteIcon';

class TodoEntity extends Component {
  constructor() {
    super();
    this.state = {hoverd: false};
  }

  render() {
    const { 
      createTime, 
      index,
      title, 
      status, 
      changeEntityStatus,
    } = this.props;

    return (
      <div 
        style={{display: 'flex'}}
        onMouseEnter={() => this.setHoverState(true)}
        onMouseLeave={() => this.setHoverState(false)}
      >
        <div style={{flex: 1}}>
          { 
            status === 0 ? <CheckIcon handleClick={() => changeEntityStatus(index, 1)} checked={false}/> : 
              status === 1 ? <CheckIcon handleClick={() => changeEntityStatus(index, 0)} checked={true}/> :
                null 
          }
          <span className={status === 2 ? 'deleted' : ''}>{title}</span>
        </div>
        <div style={{flex: 1}}>
          {
            this.state.hoverd ? <DeleteIcon handleClick={() => changeEntityStatus(index, 2)}/>
                              : <span>{createTime}</span>
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
