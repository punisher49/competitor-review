import React, { Component } from 'react';
import "../style/Styles.css"
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
class Competitors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // competitors: false,
      intervalId: 0,
      isOpen: false
    };
  };
  // clickedCompetitors(){
  //   this.setState({
  //     competitors : true });
  //   }
  //   <Navbar dataFromCompetitors = {this.state.competitors}/>

  // onClick={() => this.clickedCompetitors()}
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div>
          <Navbar/>
          <div className="competitors">
            <div className="jumbotron">
              <div className="container">
                <h1>Competitors</h1>
                <div className="dropdown" onClick={this.toggleOpen}>
                  <button
                    className="btn btn-success btn-lg btn-block dropdown-toggle"
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
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    }
  }


  export default Competitors
