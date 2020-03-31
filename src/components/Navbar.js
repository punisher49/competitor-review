import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from "./Search";
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
            <Search/>
          </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
              Aeons
              </Link>
              </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
              Create Aeon Log
              </Link>
            </li>

          </ul>
        </div>
        </div>
      </nav>
    );
  }
}
