import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => {
  const logoStyle = {
    width: "50px",
    height: "auto",
    marginRight: "10px",
    marginLeft: "30px",
  };

  const headerStyle = {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <header style={headerStyle}>
      <Row className="align-items-center">
        <Col xs="auto">
          <img
            src={process.env.PUBLIC_URL + "/star-wars-logo.png"}
            alt="Logo"
            style={logoStyle}
          />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
