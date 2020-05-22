import React, { Component, createRef } from 'react'
import "../style/Styles.css"
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
class IndonesiaInsights extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.scrollDiv2 = createRef();
    this.scrollDiv3 = createRef();
    this.scrollDiv4 = createRef();
    this.scrollDiv5 = createRef();
    this.scrollDiv6 = createRef();
    this.scrollDiv7 = createRef();
    this.scrollDiv8 = createRef();
    this.scrollDiv9 = createRef();
    this.scrollDiv10 = createRef();
    this.scrollDiv11 = createRef();
    this.scrollDiv12 = createRef();
    this.scrollDiv13 = createRef();
  }
  scrollSmoothHandler = () => {
    this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandler2 = () => {
    this.scrollDiv2.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandler3 = () => {
    this.scrollDiv3.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandler4 = () => {
    this.scrollDiv4.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandler5 = () => {
    this.scrollDiv5.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandler6 = () => {
    this.scrollDiv6.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandler7 = () => {
    this.scrollDiv7.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandler8 = () => {
    this.scrollDiv8.current.scrollIntoView({ behavior: "smooth" });
  };



  scrollSmoothHandler10 = () => {
    this.scrollDiv10.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandler11 = () => {
    this.scrollDiv11.current.scrollIntoView({ behavior: "smooth" });
  };


  render() {
    return (
      <div className="bg-dark">
      <div className="row">

      <div className="col-sm-10 scrollspy-example" data-spy="scroll" data-target="#spy">

      <div id="scroll1" ref={this.scrollDiv}>
      </div>
      <div id="scroll2" ref={this.scrollDiv2}>
      </div>
      <div id="scroll3" ref={this.scrollDiv3}>
      </div>
      <div id="scroll4" ref={this.scrollDiv4}>
      </div>
      <div id="scroll5" ref={this.scrollDiv5}>
      </div>
      <div id="scroll6" ref={this.scrollDiv6}>
      </div>
      <div id="scroll7" ref={this.scrollDiv7}>
      </div>
      <div id="scroll8" ref={this.scrollDiv8}>
      </div>

      <div id="scroll10" ref={this.scrollDiv10}>
      </div>
      <div id="scroll11" ref={this.scrollDiv11}>
      </div>

      </div>



      <div className="hidden-sm-down" id="spy">

      <ul className="nav nav-pills flex-column">
      <li className="nav-link" onClick={this.scrollSmoothHandler}>Title</li>
      <li className="nav-link" onClick={this.scrollSmoothHandler2}>Economic / Demographics</li>
      <li className="nav-link" onClick={this.scrollSmoothHandler3}>Consumer Profile</li>
      <li className="nav-link" onClick={this.scrollSmoothHandler4}>Retail Channel Developments</li>
      <li className="nav-link" onClick={this.scrollSmoothHandler5}>Leading Retailers That Stock Western Brands</li>
      <li className="nav-link" onClick={this.scrollSmoothHandler6}>Leading E-Commerce Grocers</li>
      <li className="nav-link" onClick={this.scrollSmoothHandler7}>Foodservice Channel Developments</li>
      <li className="nav-link" onClick={this.scrollSmoothHandler8}>Recommended Promotional Activities</li>

      <li className="nav-link" onClick={this.scrollSmoothHandler10}>Category Overview - Baby Food</li>
      <li className="nav-link" onClick={this.scrollSmoothHandler11}>Key Import Partners
      </li>

      </ul>
      </div>
      </div>
      </div>








    );
  }
}



export default IndonesiaInsights
