import React, { useState } from "react";
import CountryTable from "./components/CountryTable";
import SearchBox from "./components/Searchbox";
import useCountries from "./hooks/useCountries";
import { FTSApi, getCountriesApi, searchByCapitalApi } from "./api/api";
import RadioBox from "./components/RadioBox";

function App() {
  const [isFTS, setFTS] = useState(false);

  const { countries, isLoading, isError, mutate } = useCountries();

  const handleSearchByCapital = async (capital) => {
    if (!capital) {
      const allCountries = await getCountriesApi();
      mutate(allCountries, { revalidate: false });
      return;
    }
    const updated = await searchByCapitalApi(capital);
    mutate(updated, {
      revalidate: false,
    });
  };

  const handleFTS = async (text) => {
    if (!text) {
      const allCountries = await getCountriesApi();
      mutate(allCountries, { revalidate: false });
      return;
    }

    const updated = await FTSApi(text);
    mutate(updated, {
      revalidate: false,
    });
  };

  if (isError) return <p>Error: Could not fetch the countries!</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 mt-4">
        <div>
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
          searchByCapital={isFTS ? handleFTS : handleSearchByCapital}
        ></SearchBox>
        <CountryTable countryList={countries}></CountryTable>
      </div>
    </div>
  );
}

export default App;
