import React, { Component } from 'react';

import 'rsuite/dist/styles/rsuite.min.css';
import { InputGroup, Input, Icon } from 'rsuite';

class QueryInput extends Component {
  render() {
    return (
      <InputGroup>
        <Input placeholder="type the title of todo-entity you want to search" />
        <InputGroup.Button>
          <Icon icon="search" />
        </InputGroup.Button>
      </InputGroup>
    );
  }
}

export default QueryInput;
