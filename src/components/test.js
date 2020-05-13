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





<!-- Footer -->
<footer class="page-footer font-small blue pt-4">

  <!-- Footer Links -->
  <div class="container-fluid text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-6 mt-md-0 mt-3">

        <!-- Content -->
        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none pb-3">

      <!-- Grid column -->
      <div class="col-md-3 mb-md-0 mb-3">

        <!-- Links -->
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 mb-md-0 mb-3">

        <!-- Links -->
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>








  You can use rest parameter. which will come handy when you have lot's of keys which you want to keep and removing only few of them.

  const arrayData= [{index: 0,is_required: true,name: "vmvdnksl",type: "LONG_TEXT"},{index: 1,is_required: true,name: "dsvnlk",type: "MULTIPLE_SELECTORS"}];

  const result = arrayData.map(({type,index,...rest}) => ({...rest}));

  console.log(result);
