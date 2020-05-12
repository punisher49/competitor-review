import React from "react";
import { connect } from "react-redux";
import {Router, Redirect, withRouter } from "react-router-dom";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  isSignedin = () => {
    return this.props.isAuthenticated;
  };

  render = () => {
    let { component: Component, ...rest } = this.props;

    return (
      <Router
        {...rest}
        render={(props) =>
          this.isSignedin() ? (
            <Component {...props} />
          ) : props.location.pathname === "/" ? null : (
            <Redirect to="/" />
          )
        }
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));






////////////////////version 2
///////////////////version 2
///////////////////version 2
///////////////////version 2
///////////////////version 2
///////////////////version 2
///////////////////version 2
///////////////////version 2
///////////////////version 2
///////////////////version 2







import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import Logout from "./Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const AuthContext = React.createContext()
  const user = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
      />
  );
};


const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(PrivateRoute);
