import axios from "axios";

const baseUri = "https://restcountries.com/v2";
const all = baseUri + "/all";
const byCapital = (capital) => baseUri + "/capital/" + capital;

export async function getCountriesApi() {
  const res = await axios.get(all);
  const countries = res.data;

  return countries;
}

export async function searchByCapitalApi(capital) {
  const res = await axios.get(byCapital(capital));
  const countries = res.data;

  return countries;
}
