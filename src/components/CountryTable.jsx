import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

const CountryTable = ({ countryList }) => {
  if (!countryList) {
    return <div>Loading</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        {countryList.map((c) => (
          <tr key={c.name}>
            <td>{c.name}</td>
            <td>{c.capital}</td>
            <td>{c.region}</td>
            <td>
              <div
                style={{
                  display: "inline",
                  backgroundColor: "gray",
                  padding: 6,
                  borderRadius: 6,
                }}
              >
                {/* <Image width={36} src={c.flag}></Image> */}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CountryTable;
