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
      Categories
      </button>
      <div className={menuClass} aria-labelledby="dropdownMenuButton">

      <Link to="/babyfood" className="dropdown-item">
      Baby Food
      </Link>

      <Link to="/" className="dropdown-item">
      Coffee
      </Link>

      <Link to="/" className="dropdown-item">
      Free-From Food
      </Link>

      <Link to="/" className="dropdown-item">
      Functional Packaged Food
      </Link>

      <Link to="/" className="dropdown-item">
      Organic Packaged Food
      </Link>

      <Link to="/" className="dropdown-item">
      Sauces and Condiments
      </Link>

      <Link to="/" className="dropdown-item">
      Savoury Snack Food
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
