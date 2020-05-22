// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import RegisterModal from "./auth/RegisterModal";
// import LoginModal from "./auth/LoginModal";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "./auth/Logout";
import "./style/Styles.css"
import { SocialIcon } from 'react-social-icons';
import GoBackButton from "./GoBackButton";



class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false

    };
  }
  componentDidMount(){
    setTimeout(() => {
      console.log(this.props.dataFromHome);
    }, 16000);
  }
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  dataFromHome () {
    return this.props.dataFromHome
  }
  // <span className="navbar-text mr-6">
  //   <strong className="welcome">{user ? `Welcome ${user.name}` : ""}</strong>
  // </span>
  // const { isAuthenticated, user } = this.props.auth;
  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <GoBackButton/>
        <Logout />
      </Fragment>
    );

    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

    const trufish = (
      <Fragment>
        <div className="dropdown" onClick={this.toggleOpen}>
          <button
            className="btn btn-primary btn-lg dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            >
            Countries
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">

            <Link to="/" className="dropdown-item">
              China
            </Link>

            <Link to="/" className="dropdown-item">
              Hong Kong
            </Link>

            <Link to="/indonesia" className="dropdown-item">
              Indonesia
            </Link>

            <Link to="/" className="dropdown-item">
              Japan
            </Link>

            <Link to="/" className="dropdown-item">
              Malaysia
            </Link>

            <Link to="/" className="dropdown-item">
              Saudi Arabia
            </Link>

            <Link to="/" className="dropdown-item">
              Singapore
            </Link>

            <Link to="/" className="dropdown-item">
              South Korea
            </Link>

            <Link to="/" className="dropdown-item">
              Philippines
            </Link>

            <Link to="/" className="dropdown-item">
              UAE
            </Link>

            <Link to="/" className="dropdown-item">
              Vietnam
            </Link>
          </div>
        </div>

      </Fragment>
    )

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

        <Link to="/" className="btn btn-outline-info" onClick={() => this.dataFromHome()}>
          Home
        </Link>
        {isAuthenticated ? authLinks : ""}

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
export default connect(mapStateToProps, null)(Navbar);


// const normalLinks = (
//   <Fragment>
//     <div className="dropdown" onClick={this.toggleOpen}>
//       <button
//         className="btn btn-outline-warning dropdown-toggle"
//         type="button"
//         id="dropdownMenuButton"
//         data-toggle="dropdown"
//         aria-haspopup="true"
//         >
//         Baby Food Markets
//       </button>
//       <div className={menuClass} aria-labelledby="dropdownMenuButton">
//
//         <Link to="/ranchos" className="dropdown-item">
//           Ranch Market
//         </Link>
//
//         <Link to="/grands" className="dropdown-item">
//           Grand Lucky
//         </Link>
//
//         <Link to="/carrefours" className="dropdown-item">
//           Carrefours
//         </Link>
//         <Link to="/foodhalls" className="dropdown-item">
//           Foodhall
//         </Link>
//         <Link to="/farmers" className="dropdown-item">
//           Farmers
//         </Link>
//
//
//         <Link to="/primos" className="dropdown-item">
//           Primo
//         </Link>
//
//         <Link to="/aeons" className="dropdown-item">
//           Aeon
//         </Link>
//
//         <Link to="/heros" className="dropdown-item">
//           Hero
//         </Link>
//       </div>
//     </div>
//   </Fragment>
// );
