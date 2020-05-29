import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from 'react-router';

const GoBackButton = withRouter(({history, ...props}) => (
  <div>
    <button className="btn btn-outline-danger" id="gobackbutton"
       onClick={() => {
        // history.push('/')
        history.goBack(-1);
      }}>Back
    </button>
  </div>
));
export default GoBackButton
