import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import app from "./auth/base";
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

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
          <a href="/" className="btn btn-outline-light" type="button">
            Home
          </a>
          <Dropdown>
            <Dropdown.Toggle variant="outline-warning" type="button">
              Baby Food
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/carrefours">Carrefours Transmart</Dropdown.Item>
              <Dropdown.Item href="/farmers">Farmers Market</Dropdown.Item>
              <Dropdown.Item href="/ranchos">Ranch Market</Dropdown.Item>
              <Dropdown.Item href="/grands">Grand Lucky</Dropdown.Item>
              <Dropdown.Item href="/foodhalls">Foodhall</Dropdown.Item>
              <Dropdown.Item href="/primos">Primo</Dropdown.Item>
              <Dropdown.Item href="/aeons">Aeon</Dropdown.Item>
              <Dropdown.Item href="/heros">Hero</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={() => app.auth().signOut()} variant="outline-warning" id="align-right">Sign out</Button>


        </div>
      </nav>
    );
  }
}
