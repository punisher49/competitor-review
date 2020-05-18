import React, { Component, Fragment } from 'react';
import "./style/Styles.css"
import Footer from "./Footer";
import PaypalButtons from "./paypal/PaypalButtons"
// import Spinner from "./paypal/Spinner";
import "./style/Styles.css"
// import Lambo from "./images/lambo.jpg";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

class Home extends Component {
  state = {
    showPaypal: false
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    const { isAuthenticated } = this.props.auth;
    const guestLinks = (
      <Fragment>
        <div className="row">
        <LoginModal />
        <RegisterModal />
        </div>
      </Fragment>
    );
    if (showPaypal) {
      return <PaypalButtons />;
    } else {
      return (

        <div>
          <div id="homepage">
            <div className="col-md-12">
              <div className="jumbotron">
                <h3>Export Connect</h3>
                <p>Founded in 2017, Export Connect exists to help Australian businesses develop the strategies and connections they need to export successfully and grow.</p>
                {isAuthenticated ? "" : guestLinks}
              </div>
            </div>
          </div>

          <Footer/>
        </div>
      );
    }
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Home);
