import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "../auth/Logout";
import "../style/Styles.css"
import { SocialIcon } from 'react-social-icons';
import GoBackButton from "../GoBackButton";
import CompetitorsCountries from "./CompetitorsCountries";


class NavbarWithCountries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false

    };
  }
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
      // { this.props.dataFromCompetitors ? <CompetitorsCountries/> : ""}
  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Fragment>
        <GoBackButton/>
        <Logout />
      </Fragment>
    );
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

        <Link to="/" className="btn btn-outline-info">
          Home
        </Link>

        {isAuthenticated ? authLinks : ""}
        <CompetitorsCountries/>
        <div className="ml-auto">
          <SocialIcon url="https://exportconnect.com.au/" target="_blank" bgColor="#f7aa00" fgColor="black" style={{ height: 40, width: 40 }}/>
          <SocialIcon url="https://www.facebook.com/exportconnect/" target="_blank" bgColor="#3b5998" fgColor="white" style={{ height: 40, width: 40 }}/>
          <SocialIcon url="https://www.instagram.com/exportconnect/" target="_blank" bgColor="#dd2a7b" fgColor="white" style={{ height: 40, width: 40 }}/>
          <SocialIcon url="https://www.linkedin.com/company/exportconnect/" target="_blank" bgColor="#0e76a8" fgColor="white" style={{ height: 40, width: 40 }}/>
        </div>


      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  competitors: state.competitors
});
export default connect(mapStateToProps, null)(NavbarWithCountries);
