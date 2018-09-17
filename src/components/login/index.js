import * as React from 'react';
import { Redirect } from 'react-router';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from 'rsuite';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class LoginSection extends React.Component {
  render() {
    const { location, redirectToReferrer } = this.props;
    const { from } = 
      location ? 'state' in location && location.state ? location.state : { from: { pathname: '/' } } : { from: { pathname: '/' } };
    if (redirectToReferrer) {
      return <Redirect to={from}/>;
    }

    return(
      <div>
        <Button appearance={'primary'} onClick={this.props.requestLogin}>点击登录()</Button>
        <NavLink to="/main">跳转ToDo页面(验证HOC)</NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redirectToReferrer: state.auth.redirectToReferrer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestLogin: () => dispatch(actions.requestLogin()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginSection));
