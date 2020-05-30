import React, { Component } from 'react';
import "../style/Styles.css"
import Footer from "../Footer";
import { Link } from "react-router-dom";
import InsightsNavbarWithCountries from "./InsightsNavbarWithCountries";
class IndonesiaInsights extends Component {
  state = {
    isOpen: false
  };
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div>
        <InsightsNavbarWithCountries/>
        <div className="insights">
          <div id="opacityinsights">
              <div className="dropup" onClick={this.toggleOpen}
                id="marginrightbuttons">
                <button
                  className="btn btn-danger dropdown-toggle mobilemarketcountryandcategorydropdownbutton"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  id="marketcountryandcategorydropdownbutton"
                  >
                  CATEGORY
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
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}



export default IndonesiaInsights
