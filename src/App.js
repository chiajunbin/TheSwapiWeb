import React from "react";
import DataTablePeople from "./containers/People";
import DataTablePlanets from "./containers/Planet";
import DataTableStarship from "./containers/Starship";
import { Menu } from "antd";
import Header from "../src/components/Header";
import { RocketOutlined, CloudOutlined, UserOutlined } from "@ant-design/icons";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const logoStyle = {
    width: "150px",
    height: "auto",
    margin: "auto",
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div
          className="col-md-2 d-flex flex-column"
          style={{
            padding: 0,
            minheight: "100&",
            borderRight: "2px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/star-wars-logo.png"}
            alt="Logo"
            style={logoStyle}
          />
          <Menu
            mode="vertical"
            onClick={({ key }) => navigate(key)}
            items={[
              {
                label: "Starship",
                key: "/starship",
                icon: <RocketOutlined />,
              },
              { label: "People", key: "/people", icon: <UserOutlined /> },
              { label: "Planet", key: "/planet", icon: <CloudOutlined /> },
            ]}
            style={{ height: "100%" }}
          ></Menu>
        </div>

        <div className="col-md-10" style={{ padding: 0 }}>
          <Header />

          <div style={{ paddingTop: "20px", paddingLeft: "15px" }}>
            <Routes>
              <Route path="/people" element={<DataTablePeople />} />
              <Route path="/planet" element={<DataTablePlanets />} />
              <Route path="/starship" element={<DataTableStarship />} />
              <Route path="/*" element={<Navigate replace to="/starship" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
