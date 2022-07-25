import axios from "axios";
import { deepSearch } from "../util/deepSearch";

const baseUri = "https://restcountries.com/v2";
const fieldsQuery = "?fields=name,capital,region,flag";
const all = baseUri + "/all";
const allWithFields = all + fieldsQuery;
const byCapital = (capital) => baseUri + "/capital/" + capital;

export async function getCountriesApi() {
  const res = await axios.get(allWithFields);
  const countries = res.data;

  return countries;
}

async function getAllCountriesApi() {
  const res = await axios.get(all);
  const countries = res.data;

  return countries;
}

export async function searchByCapitalApi(capital) {
  const res = await axios.get(byCapital(capital));
  const countries = res.data;

  return countries;
}

export async function FTSApi(string) {
  const t0 = performance.now();

  let founds = [];

  const countries = await getAllCountriesApi();

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (deepSearch(country, string)) {
      founds.push(country);
    }
  }

  const t1 = performance.now();
  console.log(`Naive search took ${t1 - t0} milliseconds.`);

  console.log("found results", founds);
  return founds;
}
