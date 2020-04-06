import React from "react";
import app from "./base";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()} class="btn btn-dark">Sign out</button>
    </>
  );
};

export default Home;
