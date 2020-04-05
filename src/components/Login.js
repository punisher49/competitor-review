import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import "bootstrap/dist/css/bootstrap.min.css"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push("/carrefours");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/carrefours" />;
  }

  return (
    <div className="container">

      <form className="" onSubmit={handleLogin}>
        <h5 class="card-title text-center">Login</h5>
        <div class="form-group" >
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control mr-sm-2" id="exampleInputEmail1"
            name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control mr-sm-2" id="exampleInputPassword1" name="password" placeholder="Password"/>
        </div>

        <button type="submit" class="btn btn-dark">Log In</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
