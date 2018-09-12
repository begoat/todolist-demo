import React, { Component } from 'react';

import CheckIcon from './CheckIcon';

class TodoEntity extends Component {
  render() {
    const { createTime, title, status } = this.props;
    return (
      <div>
        {createTime}
        {title}
        {status}
        <CheckIcon />
      </div>
    );
  }
}

export default TodoEntity;
