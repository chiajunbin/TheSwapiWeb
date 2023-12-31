import React from "react";
import DataTablePeople from "./containers/People";
import DataTablePlanets from "./containers/Planet";
import DataTableStarship from "./containers/Starship";
/* import MetisMenu from "react-metismenu"; */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*       <MetisMenu
        content={[
          {
            module_name: "Dashboard",
            icon: "pe-7s-home",
            label: "DASHBOARD",
            to: "#/dashboard",
          },
        ]}
      /> */}

      <Router>
        <Routes>
          <Route path="/people" element={<DataTablePeople />} />
          <Route path="/planet" element={<DataTablePlanets />} />
          <Route path="/starship" element={<DataTableStarship />} />
          <Route path="/*" element={<Navigate replace to="/starship" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
