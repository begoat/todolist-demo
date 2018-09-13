import * as React from 'react';
import img from '../../assets/404.png';

export default class extends React.Component {
  render() {
    return(
      <div className="center" style={{height: '100%', background: '#ececec', overflow: 'hidden'}}>
        <img src={img} alt="404" />
      </div>
    );
  }
}
