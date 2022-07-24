import axios from "axios";

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

export async function searchByCapitalApi(capital) {
  const res = await axios.get(byCapital(capital));
  const countries = res.data;

  return countries;
}

export async function searchFullText(string) {
  const res = await axios.get(all);
  console.log(res);

  const data = res.data;

  const t0 = performance.now();

  let founds = [];
  for (let i = 0; i < data.length; i++) {
    const json = JSON.stringify(data[i]);
    if (json.includes(string)) {
      founds.push(data[i]);
    }
  }

  const t1 = performance.now();
  console.log(`Naive search took ${t1 - t0} milliseconds.`);

  console.log("found results", founds);
}
