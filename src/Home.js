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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitors: false,
      intervalId: 0,
    };
  };

  clickedCompetitors(){
    this.setState({
      competitors : true });
    }

    scrollStep() {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
      console.log(this.state.competitors);
    }

    render() {
      // const { showPaypal } = this.state;
      const { isAuthenticated } = this.props.auth;
      const guestLinks = (
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

        <div className="jumbotron">
        <div className="container">
        <div className="row">
        <div className="col-md-4">

        <Link to="competitors" className="btn btn-info btn-lg" onClick={() => this.clickedCompetitors()}>Competiror's Review</Link>
        </div>


        <br/>
        <div className="col-md-4">
        <Link to="/insights" className="btn btn-danger btn-lg">Market Insights</Link>
        </div>
        <div className="col-md-4">
        <Link to="/" className="btn btn-success btn-lg">Export Training</Link>
        </div>
        </div>
        </div>
        </div>

        </Fragment>
      )

      return (

        <div>

        <div id="homepage">

        <div className="col-md-12">

        {isAuthenticated ? "" : guestLinks}
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
