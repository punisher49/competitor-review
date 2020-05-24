import React, { Component } from 'react';
import "../style/Styles.css"
import { Link } from "react-router-dom";
class InsightsDropdownCategories extends Component {
  state = {
    isOpen: false
  };
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (

      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-success dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          >
          Categories
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">

          <Link to="/indonesiababyfoodinsights" className="dropdown-item">
            Baby Food Insights
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Coffee Insights
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Free-From Food Insights
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Functional Packaged Food Insights
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Organic Packaged Food Insights
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Sauces and Condiments Insights
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Savoury Snack Food Insights
          </Link>
        </div>
      </div>

    );
  }
}



export default InsightsDropdownCategories
