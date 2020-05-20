import React from "react";
import "./style/Styles.css"
import { MDBContainer,  MDBFooter } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
const FooterPage = () => {
  return (

    <MDBFooter className="bg-dark text-white">
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Developed by <a href="https://hasan-aliyev.site/" target="_blank" rel="noopener noreferrer"> H.A</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
