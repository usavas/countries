import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

import useCountries from "../hooks/useCountries";

const CountryTable = () => {
  const { countries, isError, isLoading } = useCountries();

  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>Error</div>;

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
        {countries.map((c) => {
          return (
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
          );
        })}
      </tbody>
    </Table>
  );
};

export default CountryTable;
