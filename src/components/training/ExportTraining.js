import React, { Component } from "react";
import "../style/Styles.css";
import Navbar from "../Navbar";

class ExportTraining extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-6" id="videoDiv">
              <h2>Why Export?</h2>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="//www.youtube.com/embed/ePbKGoIGAXY"
                ></iframe>
              </div>
            </div>

            <div className="col-sm-6" id="videoDiv">
              <h2>Export vision & Kpi's</h2>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="//www.youtube.com/embed/ePbKGoIGAXY"
                ></iframe>
              </div>
            </div>

            <div className="col-sm-6" id="videoDiv">
              <h2>Resourcing for export</h2>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="//www.youtube.com/embed/ePbKGoIGAXY"
                ></iframe>
              </div>
            </div>

            <div className="col-sm-6" id="videoDiv">
              <h2>Market selection factors</h2>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="//www.youtube.com/embed/ePbKGoIGAXY"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ExportTraining;
