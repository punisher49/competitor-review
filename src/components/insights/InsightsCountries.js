import React, { Component } from "react";
import "../style/Styles.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
class InsightsCountries extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div>
        <Navbar />
        <div className="insights">
          <div id="opacityinsights">
            <div
              className="dropup"
              onClick={this.toggleOpen}
              id="marginrightbuttons"
            >
              <button
                className="btn btn-danger dropdown-toggle mobilemarketcountryandcategorydropdownbutton"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                id="marketcountryandcategorydropdownbutton"
              >
                MARKET
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default InsightsCountries;
