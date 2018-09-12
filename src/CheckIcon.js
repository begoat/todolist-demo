import React, { Component } from 'react';

import Checked from './assets/checked.svg';
import NotChecked from './assets/notchecked.svg';

import 'rsuite/dist/styles/rsuite.min.css';
import { Icon } from 'rsuite';

class CheckIcon extends Component {
  render() {
    return (
      <div>
        <Icon icon={Checked} size="lg"/>
        <Icon icon={NotChecked} size="lg"/>
      </div>
    );
  }
}

export default CheckIcon;
