import React from "react";
import app from "./auth/base";
const Home = () => {
  return (
    <>
      <h3>This is going to be a Home page but I don't have any content to put in</h3>
      <button onClick={() => app.auth().signOut()} className="btn btn-outline-danger"  >Sign out</button>
    </>
  );
};

export default Home;
