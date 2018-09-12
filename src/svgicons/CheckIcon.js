import React, { Component } from 'react';

import Checked from '../assets/checked.svg';
import NotChecked from '../assets/notchecked.svg';

import 'rsuite/dist/styles/rsuite.min.css';
import { Icon } from 'rsuite';

class CheckIcon extends Component {
  render() {
    const { checked, handleClick } = this.props;
    return (
      <React.Fragment>
        {
          checked ? <Icon onClick={handleClick} icon={Checked} size="lg"/> 
                  : <Icon onClick={handleClick} icon={NotChecked} size="lg"/>
        }
      </React.Fragment>
    );
  }
}

export default CheckIcon;
