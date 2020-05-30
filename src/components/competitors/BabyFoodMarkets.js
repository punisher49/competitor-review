import React, { Component } from 'react';
import "../style/Styles.css"
import { Link } from "react-router-dom";

class BabyFoodMarkets extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
      <button
      className="btn btn-warning dropdown-toggle wrap"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      id="logoutbutton"
      >
      Supermarkets and
      eCommerce Platforms
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

    );
  }
}


export default BabyFoodMarkets
