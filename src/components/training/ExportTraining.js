import React, { Component } from "react";
import "../style/Styles.css";
import Navbar from "../Navbar";

class ExportTraining extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-6" id="videoDiv">

              <div className="embed-responsive embed-responsive-16by9">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/cI196YhpQz4" allowFullScreen="allowFullScreen" />
              </div>
            </div>


            <div className="col-sm-6" id="videoDiv">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/P1g5XFPBq8c" allowFullScreen="allowFullScreen" />
              </div>
            </div>



            <div className="col-sm-6" id="videoDiv">

              <div className="embed-responsive embed-responsive-16by9">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/kBUe51ekSHQ" allowFullScreen="allowFullScreen" />
              </div>
            </div>

            <div className="col-sm-6" id="videoDiv">

              <div className="embed-responsive embed-responsive-16by9">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/x-Sr6RYX32M" allowFullScreen="allowFullScreen" />
              </div>
            </div>



            <div className="col-sm-6" id="videoDiv">

              <div className="embed-responsive embed-responsive-16by9">
                <iframe width={500} height={400} src="https://www.youtube.com/embed/kTfySgKs3sc" allowFullScreen="allowFullScreen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ExportTraining;
