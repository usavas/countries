import React from "react";

const CountryTable = ({ countryList }) => {
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
        {countryList.map((c) => {
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
