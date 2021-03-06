import React, { Component } from 'react';
import "../style/Styles.css"
import Footer from "../Footer";
import { Link } from "react-router-dom";
import NavbarWithCountries from "./NavbarWithCountries";

class Indonesia extends Component {
  state = {
    isOpen: false
  };
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div>
        <NavbarWithCountries/>
        <div className="competitors">
          <div id="opacityinsights">
              <div className="dropup" onClick={this.toggleOpen}   id="marginrightbuttons">
                <button
                  className="btn btn-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  id="competitorscountriesandcategoriesbutton"
                  >
                  CATEGORIES
                </button>
                <div className={menuClass} aria-labelledby="dropdownMenuButton">

                  <Link to="/ranchos" className="dropdown-item">
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
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}



export default Indonesia
