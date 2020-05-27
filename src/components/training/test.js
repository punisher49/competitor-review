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


import React, { Component } from "react";
import "../style/Styles.css";
import Navbar from "../Navbar";

class ExportTraining extends Component {



  render() {
    return (
      <div>
      <div className="training" id="mobileTraining">
        <Navbar />
        <div className="jumbotron" id="exportOpacity">
          <div className="container">
            <div className="row">
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4">

                  <div className="image image1"></div>
              </div>
              <div className="col-sm-6 col-md-4">

                  <div className="image image2"></div>
              </div>
              <div className="col-sm-6 col-md-4">

                  <div className="image image3"></div>
              </div>
              <div className="col-sm-6 col-md-4">

                  <div className="image image4"></div>
              </div>
              <div className="col-sm-6 col-md-4">

                  <div className="image image5"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default ExportTraining;
