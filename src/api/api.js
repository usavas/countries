import axios from "axios";
import { jsonSearch } from "../util/deepSearch";

const baseUri = "https://restcountries.com/v2/all";

export async function getAllCountriesApi() {
  const res = await axios.get(baseUri);

  const statusInfo = checkApiResponseStatus(res.status);
  if (statusInfo.error) {
    return [];
  }

  const countries = res.data;

  return countries;
}

export async function FTSApi(string) {
  let founds = [];

  const countries = await getAllCountriesApi();

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (jsonSearch(country, string)) {
      founds.push(country);
    }
  }
  return founds;
}

function checkApiResponseStatus(status) {
  status = status.toString();

  if (status.startsWith("2")) {
    return { error: false };
  }

  if (status.startsWith("4")) {
    return { error: true, msg: "Resource error" };
  }

  if (status.startsWith("5")) {
    return { error: true, msg: "Server error" };
  }
}
