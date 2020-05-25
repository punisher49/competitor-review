import React, { Component, Fragment } from 'react';
import "./components/style/Styles.css"
import Footer from "./components/Footer";
// import PaypalButtons from "./paypal/PaypalButtons"
// import Spinner from "./paypal/Spinner";
import "./components/style/Styles.css"
// import Lambo from "./images/lambo.jpg";
import RegisterModal from "./components/auth/RegisterModal";
import LoginModal from "./components/auth/LoginModal";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style/Styles.css"

class Home extends Component {
  render() {
    // const { showPaypal } = this.state;
    const { isAuthenticated } = this.props.auth;
    const information = (
      <Fragment>
        <div className="jumbotron">

          <h3>Export Connect</h3>
          <p>Founded in 2017, Export Connect exists to help Australian businesses develop the strategies and connections they need to export successfully and grow.</p>
          <div className="row">
            <LoginModal />
            <RegisterModal />
          </div>
        </div>
      </Fragment>
    );
    const threeDestinations =(
      <Fragment>

        <div className="container">
          <div className="jumbotron" id="mainButtons">
            <div className="row">
              <div className="col-md-4 text-center">
                <Link to="competitors" className="btn btn-info btn-lg btn-block" id="homeNavigation">Competitor's Review</Link>
              </div>
              <div className="col-md-4 text-center">
                <Link to="/insightscountries" className="btn btn-danger btn-lg btn-block" id="homeNavigation">Market Insights</Link>
              </div>
              <div className="col-md-4 text-center">
                <Link to="/exporttraining" className="btn btn-success btn-lg btn-block" id="homeNavigation">Export Training</Link>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    )

    return (

      <div>
        <Navbar/>
        <div id="homepage">

          <div className="col-md-12 ">

            {isAuthenticated ? "" : information}
            {isAuthenticated ? threeDestinations : ""}
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Home);
