import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "../auth/Logout";
import "../style/Styles.css";
import { SocialIcon } from "react-social-icons";
import GoBackButton from "../GoBackButton";
import InsightsDropdownCountries from "./InsightsDropdownCountries";
import InsightsDropdownCategories from "./InsightsDropdownCategories";
import Logo from "../images/exportconnect2.png";

class InsightsNavbarWithCountriesAndCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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
        <GoBackButton />
        <Logout />
      </Fragment>
    );
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/">
          <img
            src={Logo}
            style={{ width: "150px", height: "48px", backgroundColor: "white" }}
            className="btn btn-outline-danger"
            alt=""
          />
        </Link>
        <Link to="/" className="btn btn-outline-info" id="homebutton">
          Home
        </Link>

        {isAuthenticated ? authLinks : ""}
        <ul className="navbar-nav">
          <li className="nav-item">
            <InsightsDropdownCountries />
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <InsightsDropdownCategories />
          </li>
        </ul>

        <div className="ml-auto">
          <SocialIcon
            url="https://exportconnect.com.au/"
            target="_blank"
            bgColor="#f7aa00"
            fgColor="black"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.facebook.com/exportconnect/"
            target="_blank"
            bgColor="#3b5998"
            fgColor="white"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.instagram.com/exportconnect/"
            target="_blank"
            bgColor="#dd2a7b"
            fgColor="white"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/company/exportconnect/"
            target="_blank"
            bgColor="#0e76a8"
            fgColor="white"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  competitors: state.competitors,
});
export default connect(
  mapStateToProps,
  null
)(InsightsNavbarWithCountriesAndCategories);
