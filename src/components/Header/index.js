import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => {
  const logoStyle = {
    height: "auto",
    marginRight: "10px",
    marginLeft: "25px",
    paddingTop: "20px",
    paddingBottom: "15px",
    fontWeight: "bold",
    color: "white",
  };

  const headerStyle = {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <header style={headerStyle}>
      <Row
        className="align-items-center"
        style={{ background: "black", marginLeft: 0 }}
      >
        <Col xs="auto">
          <h5 style={logoStyle}>The Star Wars Website</h5>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
