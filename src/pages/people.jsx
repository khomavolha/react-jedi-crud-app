import React, { useState } from "react";
import Table from "../components/common/Table";
import Form from "../components/common/Form";

const data = [
  { FirstName: "Mark", LastName: "Otto", Handle: "@motto", id: "1519" },
  { FirstName: "Carl", LastName: "Reno", Handle: "@ceno", id: "2856" },
  { FirstName: "Steve", LastName: "Smith", Handle: "@ssteve", id: "3789" },
];

const columns = Object.keys(data[0]);

function PeoplePage() {
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
          tableDescriptor="People"
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

export default PeoplePage;
