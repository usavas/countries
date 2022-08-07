import React, { useState } from "react";
import CountryTable from "../components/CountryTable";
import SearchBox from "../components/Searchbox";
import RadioBox from "../components/RadioBox";
import CheckBox from "../components/CheckBox";
import useCountries from "../hooks/useCountries";
import { jsonSearch } from "../util/deepSearch";

function App() {
  const { countries, isLoading, isError } = useCountries();

  const [isFTS, setFTS] = useState(false);

  const [caseSensitive, setCaseSensitive] = useState(false);

  const [filterActive, setFilterActive] = useState(false);

  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearchByCapital = async (capital) => {
    let filtered = [];
    if (!capital) {
      setFilterActive(false);
      return;
    }

    setFilterActive(true);

    filtered = countries.filter((c) => {
      if (!c.capital) {
        return false;
      }
      const capToSearch = caseSensitive ? c.capital : c.capital.toLowerCase();
      capital = caseSensitive ? capital : capital.toLowerCase();
      return capToSearch.includes(capital);
    });

    setFilteredCountries(filtered);
  };

  const handleFTS = async (text) => {
    if (!text) {
      setFilterActive(false);
      return;
    }

    setFilterActive(true);

    let res = [];
    for (let c of countries) {
      if (jsonSearch(c, text, caseSensitive)) {
        res.push(c);
      }
    }

    if (res) {
      setFilteredCountries(res);
      return;
    }
  };

  if (isError) return <p>Error: Could not fetch the countries!</p>;

  if (isLoading) return <p>Loading...</p>;

  const shownCountries = filterActive ? filteredCountries : countries;

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 mt-4 p-2">
        <div className="  mb-2">
          <RadioBox
            id="bycapital"
            title="Search By Capital"
            isChecked={!isFTS}
            onChangeFunc={() => setFTS(false)}
          ></RadioBox>
          <RadioBox
            id="fts"
            title="Full Text Search"
            isChecked={isFTS}
            onChangeFunc={() => setFTS(true)}
          ></RadioBox>
        </div>
        <SearchBox
          isFTS={isFTS}
          searchFunc={isFTS ? handleFTS : handleSearchByCapital}
        ></SearchBox>
        <div className="col-lg-4 col-sm-6 col-xs-12 mb-4">
          <CheckBox
            title="Case Sensitive"
            isChecked={caseSensitive}
            toggle={() => {
              setCaseSensitive((prev) => !prev);
            }}
          ></CheckBox>
        </div>
        <CountryTable countryList={shownCountries}></CountryTable>
      </div>
    </div>
  );
}

export default App;
