import React, { Component, Fragment } from 'react';
import "../style/Styles.css"
import Footer from "../Footer";
import { Link } from "react-router-dom";

class Competitors extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div>
        <div className="competitors">
      <div className="jumbotron">
      <div className="container">

      <h1>Indonesia</h1>
      <div className="dropdown" onClick={this.toggleOpen}>
      <button
      className="btn btn-success btn-lg btn-block dropdown-toggle"
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
      </div>
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
export default Competitors
