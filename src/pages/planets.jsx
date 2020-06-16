import React, { useState } from "react";
import Table from "../components/common/Table";
import Form from "../components/common/Form";

const data = [
  { Name: "Mars", Diameter: "4.2", Moons: "0", Orbit: "697 days" },
  { Name: "Venus", Diameter: "7.5", Moons: "2", Orbit: "225 days" },
];

const columns = Object.keys(data[0]);

function PlanetPage() {
  const [planet, setPlanet] = useState(data);


  const handleAppPlanet = (planetData) => {
    const data = [...planet, planetData];
    setPlanet(data);
  };

  const getInitialPlanetData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const buttonDelete = (item) => {
    setPlanet(planet.filter((man) => item !== man));
  };

  return (
    <div className="container">
      {(
        <Table
          data={planet}
          columns={columns}
          tableDescriptor="Planet"
          buttonDelete={buttonDelete}
        />
      )}
      <Form
        initialData={getInitialPlanetData()}
        columns={columns}
        onAddData={handleAppPlanet}
      />
    </div>
  );
}

export default PlanetPage;
