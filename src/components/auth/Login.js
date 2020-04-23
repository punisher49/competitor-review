import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push("/competitor-review/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/competitor-review/" />;
  }

  return (
    <div className="container">
      <form className="" onSubmit={handleLogin}>
        <h5 className="card-title text-center">Login</h5>
        <div className="form-group" >
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control mr-sm-2" id="exampleInputEmail1"
            name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control mr-sm-2" id="exampleInputPassword1" name="password" placeholder="Password"/>
        </div>

        <Button type="submit" variant="outline-success">Log In</Button>
          <Link to="/signup" className="btn btn-outline-danger">
            Sign Up
          </Link>
      </form>
    </div>
  );
};

export default withRouter(Login);
