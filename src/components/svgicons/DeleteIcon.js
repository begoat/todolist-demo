import React, { Component } from 'react';
import { Icon } from 'rsuite';

import Delete from '../../assets/close.svg';

class CheckIcon extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <Icon 
        onClick={handleClick}
        icon={Delete} 
        size="lg"
      />
    );
  }
}

export default CheckIcon;
