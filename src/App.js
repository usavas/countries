import React, { useEffect, useState } from "react";
import CountryTable from "./CountryTable";
import SearchBox from "./Searchbox";

import { getCountriesApi, searchByCapitalApi } from "./api";
import fakeList from "./fakeCountries";

function App() {
  const [countryList, setCountryList] = useState();

  const searchByCapital = async (capital) => {
    const res = await searchByCapitalApi(capital);
    setCountryList(res);

    console.log("search  by capital called");
  };

  useEffect(() => {
    async function fetchCountries() {
      const countries = await getCountriesApi();
      setCountryList(countries);
      // setCountryList(fakeList);
    }
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="col-lg-8 col-md-12 offset-lg-2 mt-4">
        <SearchBox searchByCapital={searchByCapital}></SearchBox>
        <CountryTable countryList={countryList}></CountryTable>
      </div>
    </div>
  );
}

export default App;
