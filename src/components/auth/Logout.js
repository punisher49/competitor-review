import React, {Component, Fragment} from 'react'
import {Button} from 'reactstrap'
import {connect} from 'react-redux'
import {logout} from '../../actions/authActions'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export class Logout extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Fragment>

          <Link to="/" onClick={this.props.logout} className="btn btn-outline-danger">
              Logout
            </Link>
      </Fragment>
    )

  }
}

export default connect(null, {logout})(Logout)