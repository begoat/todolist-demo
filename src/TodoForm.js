import React, { Component } from 'react';

import 'rsuite/dist/styles/rsuite.min.css';

import QueryInput from './QueryInput';
import TodoEntity from './TodoEntity';

class TodoForm extends Component {
  render() {
    const entityList = [{
      createTime: 'now',
      status: 0, // status: 0(active), 1(complete), 2(deleted)
      title: '任务1',
    }, {
      createTime: 'now',
      status: 2, // status: 0(active), 1(complete), 2(deleted)
      title: '任务2',
    }, {
      createTime: 'now',
      status: 1, // status: 0(active), 1(complete), 2(deleted)
      title: '任务3',
    }];
    return (
      <div>
        <QueryInput />
        {
          entityList.map((entity, index) => {
            return <TodoEntity key={index} {...entity}/>;
          })  
        }
      </div>
    );
  }
}

export default TodoForm;
