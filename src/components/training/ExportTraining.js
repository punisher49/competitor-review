import React, { Component } from "react";
import "../style/Styles.css";
import Navbar from "../Navbar";

class ExportTraining extends Component {
  render() {
    return (
      <div className="training">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-6" id="videoDiv">
              <h3 className="headerColor">Why Export?</h3>
              <div className="embed-responsive embed-responsive-4by3">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/p7HKvqRI_Bo" allowFullScreen="allowFullScreen" />
              </div>
            </div>

            <div className="col-sm-6" id="videoDiv">
              <h3 className="headerColor">Export vision & Kpi's</h3>
              <div className="embed-responsive embed-responsive-4by3">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/p7HKvqRI_Bo" allowFullScreen="allowFullScreen" />
              </div>
            </div>

            <div className="col-sm-6" id="videoDiv">
              <h3 className="headerColor">Resourcing for export</h3>
              <div className="embed-responsive embed-responsive-4by3">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/p7HKvqRI_Bo" allowFullScreen="allowFullScreen" />
              </div>
            </div>

            <div className="col-sm-6" id="videoDiv">
              <h3 className="headerColor">Market selection factors</h3>
              <div className="embed-responsive embed-responsive-4by3">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/p7HKvqRI_Bo" allowFullScreen="allowFullScreen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ExportTraining;
