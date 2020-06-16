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
  const [star, setStar] = useState(data);
  console.log(star);

  const handleAppPerson = (starData) => {
    const data = [...star, starData];
    setStar(data);
  };

  const getInitialStarData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const buttonDelete = (item) => {
    setStar(star.filter((man) => item !== man));
  };

  return (
    <div className="container">
      {
        <Table
          data={star}
          columns={columns}
          tableDescriptor="Starships"
          buttonDelete={buttonDelete}
        />
      }
      <Form
        initialData={getInitialStarData()}
        columns={columns}
        onAddData={handleAppPerson}
      />
    </div>
  );
}

export default StarPage;
