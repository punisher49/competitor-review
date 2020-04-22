
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
      <Button className="btn btn-light" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
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


        <MenuItem onClick={handleClose}>                <button onClick={() => app.auth().signOut()} className="nav-link" id="sign-out">Sign out</button></MenuItem>
      </Menu>
    </nav>
  );
}
