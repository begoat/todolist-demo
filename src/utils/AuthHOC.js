import * as React from 'react';
import { Redirect, withRouter } from 'react-router';

import { connect } from 'react-redux';
import * as actions from '../actions/index';
import LoadingAnimationPage from '../components/others/LoadingSvg';

export const AuthHOC = (Component) => {
  class AuthContainer extends React.Component {
    componentDidMount() {
      if (this.props.isAuthenticated !== 1) {
        this.props.verifyToken();
      }
    }

    render() {
      return this.props.isAuthenticated === 0 ? <LoadingAnimationPage /> : 
        this.props.isAuthenticated === 1 ? <Component /> : 
        <Redirect to={{pathname: '/login', state: {from: this.props.location}}}/>;
    }    
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      verifyToken: () => dispatch(actions.verifyToken())
    };
  };

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));
};
