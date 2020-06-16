import React, { useState } from "react";
import Table from "../components/common/Table";
import Form from "../components/common/Form";

const data = [
  {
    Ship: "TY-456",
    Crew: "5",
    Speed: "5987km/h",
    Motto: "Together to the Stars",
  },
  { Ship: "New Meow", Crew: "85", Speed: "7846km/h", Motto: "Never Alone" },
];

const columns = Object.keys(data[0]);

function StarPage() {
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
      {
        <Table
          data={people}
          columns={columns}
          tableDescriptor="Starships"
          buttonDelete={buttonDelete}
        />
      }
      <Form
        initialData={getInitialPeopleData()}
        columns={columns}
        onAddData={handleAppPerson}
      />
    </div>
  );
}

export default StarPage;
