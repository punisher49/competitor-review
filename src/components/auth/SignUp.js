import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'

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
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control mr-sm-2" id="exampleInputEmail1"
            name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control mr-sm-2" id="exampleInputPassword1" name="password" placeholder="Password"/>
        </div>

        <Button type="submit" variant="outline-primary">Sign Up</Button>

      </form>
    </div>
  );
};

export default withRouter(SignUp);
