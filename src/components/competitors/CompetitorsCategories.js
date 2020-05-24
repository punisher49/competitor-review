import React, { Component } from 'react';
import "../style/Styles.css"
import { Link } from "react-router-dom";

class CompetitorsCategories extends Component {
  state = {
    isOpen: false
  };
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
      <button
      className="btn btn-danger dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      >
      Categories
      </button>
      <div className={menuClass} aria-labelledby="dropdownMenuButton">

      <Link to="/aeons" className="dropdown-item">
      Baby Food
      </Link>

      <Link to="/" className="dropdown-item disabled">
      Coffee
      </Link>

      <Link to="/" className="dropdown-item disabled">
      Free-From Food
      </Link>

      <Link to="/" className="dropdown-item disabled">
      Functional Packaged Food
      </Link>

      <Link to="/" className="dropdown-item disabled">
      Organic Packaged Food
      </Link>

      <Link to="/" className="dropdown-item disabled">
      Sauces and Condiments
      </Link>

      <Link to="/" className="dropdown-item disabled">
      Savoury Snack Food
      </Link>
      </div>
      </div>
    );
  }
}



export default CompetitorsCategories
