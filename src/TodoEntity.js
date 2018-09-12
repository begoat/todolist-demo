import React, { Component } from 'react';

import CheckIcon from './CheckIcon';

class TodoEntity extends Component {
  constructor() {
    super();
    this.state = {hoverd: false};
  }

  render() {
    const { createTime, title, status } = this.props;
    return (
      <div 
        style={{display: 'flex'}}
        onMouseEnter={() => this.setHoverState(true)}
        onMouseLeave={() => this.setHoverState(false)}
      >
        <div style={{flex: 1}}>
          { 
            status === 0 ? <CheckIcon checked={false}/> : 
              status === 1 ? <CheckIcon checked={true}/> :
                null 
          }
          {title}
        </div>
        <div style={{flex: 1}}>
          {
            this.state.hoverd ? <span>deleted</span>
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
