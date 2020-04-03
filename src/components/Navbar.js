import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }
  render() {
    const show = (this.state.menu) ? "show" : "" ;
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <button className="navbar-toggler" type="button"
      onClick={ this.toggleMenu }
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
      <div className="navbar-nav">
        <ul className="nav-list nav navbar-nav">

            <li className="nav-item">
              <Link to="/aeons" className="nav-link">
              Aeons
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrefours" className="nav-link">
              Carrefours Transmart
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrefours" className="nav-link">
              Farmers Market
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrefours" className="nav-link">
              Foodhall
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrefours" className="nav-link">
              GrandLucky
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrefours" className="nav-link">
              Hero
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrefours" className="nav-link">
              Primo
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrefours" className="nav-link">
              Ranch Market
              </Link>
            </li>
          </ul>

        </div>

        </div>
      </nav>
    );
  }
}
