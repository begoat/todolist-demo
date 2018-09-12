import React, { Component } from 'react';

import Delete from '../assets/close.svg';

import 'rsuite/dist/styles/rsuite.min.css';
import { Icon } from 'rsuite';

class CheckIcon extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <React.Fragment>
          <Icon 
            onClick={handleClick}
            icon={Delete} 
            size="lg"
          />
      </React.Fragment>
    );
  }
}

export default CheckIcon;
