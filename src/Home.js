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
        <div id="homepage">
          <div id="opacityline">
            <div className="row" id="marginrightbuttons">
              <LoginModal />
              <RegisterModal />
            </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
    );
    const threeDestinations =(
      <Fragment>
        <div id="homepage">
          <div id="opacityline">
              <div className="row" id="marginrightthreebuttons">
                <div className="col-md-4 text-center">
                  <Link to="/insightscountries" className="btn btn-danger btn-lg" id="mainmarketbutton">Market Insights</Link>
                </div>
                <div className="col-md-4 text-center">
                  <Link to="competitors" className="btn btn-info btn-lg" id="maincompetitorsbutton">Competitor Overview</Link>
                </div>
                <div className="col-md-4 text-center">
                  <Link to="/exporttraining" className="btn btn-success btn-lg" id="mainexportbutton">Export Training</Link>
                </div>
            </div>
          </div>
        </div>
        <Footer/>

      </Fragment>
    )

    return (

      <div>
        <Navbar/>

        {isAuthenticated ? "" : information}
        {isAuthenticated ? threeDestinations : ""}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Home);
