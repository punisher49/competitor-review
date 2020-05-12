import React from "react";
import { connect } from "react-redux";
import {Route, Redirect, withRouter } from "react-router-dom";


import PropTypes from 'prop-types';
class PrivateRoute extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  }
  isLoggedin = () => {
    return this.props.isAuthenticated;
  };

  render = () => {
    let { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) =>
          this.isLoggedin() ? (
            <Component {...props} />
          ) : props.location.pathname === "/" ? null : (
            <Redirect to="/" />
          )
        }
        />
    );
  };
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
