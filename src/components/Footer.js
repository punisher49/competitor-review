import React from "react";
import "./style/Styles.css"
import { MDBContainer,  MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (

    <MDBFooter className="footer">
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Developed by <a href="https://hasan-aliyev.site/"> HA</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
