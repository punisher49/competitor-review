
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import app from "./auth/base";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthContext } from "./auth/Auth.js";


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="btn-group mr-2" role="group" aria-label="First group">
        <Link to="/" className="btn btn-outline-light">
          Home
        </Link>
        <button className="btn btn-outline-warning" onClick={handleClick}>
          Baby Food
        </button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
          <MenuItem onClick={handleClose}>  <Link to="/carrefours" className="btn btn-dark">
            Carrefours Transmart
          </Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/farmers" className="btn btn-dark">
            Farmers Market
          </Link></MenuItem>

          <MenuItem onClick={handleClose}><Link to="/ranchos" className="btn btn-dark">
            Ranch Market
          </Link></MenuItem>

          <MenuItem onClick={handleClose}><Link to="/grands" className="btn btn-dark">
            Grand Lucky
          </Link></MenuItem>

          <MenuItem onClick={handleClose}><Link to="/foodhalls" className="btn btn-dark">
            Foodhall
          </Link></MenuItem>


          <MenuItem onClick={handleClose}><Link to="/primos" className="btn btn-dark">
            Primo
          </Link></MenuItem>

          <MenuItem onClick={handleClose}><Link to="/aeons" className="btn btn-dark">
            Aeon
          </Link></MenuItem>

          <MenuItem onClick={handleClose}><Link to="/heros" className="btn btn-dark">
            Hero
          </Link></MenuItem>


        </Menu>
      </div>

        <div className="btn-group mr-2" role="group" aria-label="Second group">
          <Link to="/login" className="btn btn-outline-success">
            Login
          </Link>
          <Link to="/signup" className="btn btn-outline-primary">
            Sign Up
          </Link>
        </div>
        <button onClick={() => app.auth().signOut()} className="btn btn-outline-danger"  >Sign out</button>
      </nav>
    );
  }
