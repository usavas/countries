import React, { useEffect, useState } from "react";
import CountryTable from "./components/CountryTable";
import SearchBox from "./components/Searchbox";

import { getCountriesApi, searchByCapitalApi } from "./api/api";
import fakeList from "./api/fakeCountries";

function App() {
  const [countryList, setCountryList] = useState();

  const fakeSearch = (capital) => {
    return fakeList.filter((c) => c.capital.includes(capital));
  };

  const searchByCapital = async (capital) => {
    // const res = await searchByCapitalApi(capital);
    // setCountryList(res);
    if (!capital) {
      setCountryList(fakeList);
      return;
    }

    const res = fakeSearch(capital);
    setCountryList(res);
  };

  useEffect(() => {
    async function fetchCountries() {
      // const countries = await getCountriesApi();
      // setCountryList(countries);
      setCountryList(fakeList);
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
