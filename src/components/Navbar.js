import React, { Component, Fragment } from "react";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import "./style/Styles.css"
import { SocialIcon } from 'react-social-icons';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <span className="navbar-text mr-6">
          <strong className="welcome">{user ? `Welcome ${user.name}` : ""}</strong>
        </span>
        <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <LoginModal />
        <RegisterModal />
      </Fragment>
    );
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    const normalLinks = (
      <Fragment>
        <div className="dropdown" onClick={this.toggleOpen} id="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            >
            Baby Food Markets
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">

            <Link to="/ranchos" className="dropdown-item">
              Ranch Market
            </Link>

            <Link to="/grands" className="dropdown-item">
              Grand Lucky
            </Link>

            <Link to="/carrefours" className="dropdown-item">
              Carrefours
            </Link>
            <Link to="/foodhalls" className="dropdown-item">
              Foodhall
            </Link>
            <Link to="/farmers" className="dropdown-item">
              Farmers
            </Link>


            <Link to="/primos" className="dropdown-item">
              Primo
            </Link>

            <Link to="/aeons" className="dropdown-item">
              Aeon
            </Link>

            <Link to="/heros" className="dropdown-item">
              Hero
            </Link>
          </div>
        </div>
      </Fragment>
    );

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="btn btn-dark">
            Home
          </Link>
          {isAuthenticated ? normalLinks : ""}
          {isAuthenticated ? authLinks : guestLinks}
        <div className="btn-group" role="group" aria-label="Third group">
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
});
export default connect(mapStateToProps, null)(Navbar);
