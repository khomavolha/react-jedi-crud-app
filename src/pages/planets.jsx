import React, { useState } from "react";
import Table from "../components/common/Table";
import Form from "../components/common/Form";

const data = [
  { Name: "Mars", Diameter: "4.2", Moons: "0", Orbit: "697 days" },
  { Name: "Venus", Diameter: "7.5", Moons: "2", Orbit: "225 days" },
];

const columns = data.length ? Object.keys(data[0]) : [];

function PlanetPage() {
  const [people, setPeople] = useState(data);
  console.log(people);

  const handleAppPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data);
  };

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const buttonDelete = (item) => {
    setPeople(people.filter((man) => item !== man));
  };

  return (
    <div className="container">
      {data.length ? (
        <Table
          data={people}
          columns={columns}
          tableDescriptor="Planet"
          buttonDelete={buttonDelete}
        />
      ) : (
        <p className="text-dark">No info about people is available.</p>
      )}
      <Form
        initialData={getInitialPeopleData()}
        columns={columns}
        onAddData={handleAppPerson}
      />
    </div>
  );
}

export default PlanetPage;
