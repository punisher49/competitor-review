import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="container">

      <form className="" onSubmit={handleSignUp}>
        <h5 className="card-title text-center">Sign Up</h5>
        <div className="form-group" >
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control mr-sm-2" id="exampleInputEmail1"
            name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control mr-sm-2" id="exampleInputPassword1" name="password" placeholder="Password"/>
        </div>

        <button type="submit" className="btn btn-dark">Sign Up</button>
          <Link to="/login" className="btn btn-dark" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
            Log In
          </Link>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
