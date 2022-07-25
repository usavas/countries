import React from "react";

import useCountries from "../hooks/useCountries";

const CountryTable = () => {
  const { countries, isError, isLoading } = useCountries();

  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>Error</div>;

  return (
    <table className="table table-striped table-bordered table-hover">
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
                    // backgroundColor: "gray",
                    padding: 6,
                    borderRadius: 6,
                  }}
                >
                  <img
                    className="image img-thumbnail"
                    src={c.flag}
                    alt={c.name + " flag"}
                    width={36}
                  ></img>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountryTable;
