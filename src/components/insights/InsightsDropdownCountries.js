import React, { Component } from 'react';
import "../style/Styles.css"
import { Link } from "react-router-dom";
class InsightsDropdownCountries extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (

      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-info dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          >
          Countries
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <Link to="/indonesiaInsights" className="dropdown-item">
            Indonesia
          </Link>

          <Link to="/" className="dropdown-item disabled">
            China
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Hong Kong
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Japan
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Malaysia
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Saudi Arabia
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Singapore
          </Link>

          <Link to="/" className="dropdown-item disabled">
            South Korea
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Philippines
          </Link>

          <Link to="/" className="dropdown-item disabled">
            UAE
          </Link>

          <Link to="/" className="dropdown-item disabled">
            Vietnam
          </Link>
        </div>
      </div>

    );
  }
}



export default InsightsDropdownCountries
