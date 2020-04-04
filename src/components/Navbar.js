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
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

            <li className="liss">
              <Link to="/aeons" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
              Aeons
              </Link>
            </li>


            <li className="liss">
              <Link to="/carrefours" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
              Carrefours Transmart
              </Link>
            </li>

            <li className="liss">
              <Link to="/farmers" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
              Farmers Market
              </Link>
            </li>

            <li className="liss">
              <Link to="/foodhalls" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
              Foodhall
              </Link>
            </li>

            <li className="liss">
              <Link to="/grands" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
              Grand Lucky
              </Link>
            </li>

            <li className="liss">
              <Link to="/heros" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
              Hero
              </Link>
            </li>

            <li className="liss">
              <Link to="/primos" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
              Primo
              </Link>
            </li>

            <li className="liss">
              <Link to="/ranchos" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
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
