
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import app from "./auth/base";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
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
      <Link to="/competitor-review/" className="btn btn-outline-light">
      Home
      </Link>
      <button className="btn btn-outline-info" onClick={handleClick}>
         Baby Food
      </button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={handleClose}>  <Link to="/competitor-review/carrefours" className="btn btn-dark">
          Carrefours Transmart
        </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/competitor-review/farmers" className="btn btn-dark">
          Farmers Market
        </Link></MenuItem>

        <MenuItem onClick={handleClose}><Link to="/competitor-review/ranchos" className="btn btn-dark">
          Ranch Market
        </Link></MenuItem>

        <MenuItem onClick={handleClose}><Link to="/competitor-review/grands" className="btn btn-dark">
          Grand Lucky
        </Link></MenuItem>

        <MenuItem onClick={handleClose}><Link to="/competitor-review/foodhalls" className="btn btn-dark">
          Foodhall
        </Link></MenuItem>


        <MenuItem onClick={handleClose}><Link to="/competitor-review/primos" className="btn btn-dark">
          Primo
        </Link></MenuItem>

        <MenuItem onClick={handleClose}><Link to="/competitor-review/aeons" className="btn btn-dark">
          Aeon
        </Link></MenuItem>

        <MenuItem onClick={handleClose}><Link to="/competitor-review/heros" className="btn btn-dark">
          Hero
        </Link></MenuItem>


        <MenuItem onClick={handleClose}>                </MenuItem>
      </Menu>
      <button onClick={() => app.auth().signOut()} className="btn btn-outline-danger"  >Sign out</button>
    </nav>
  );
}
