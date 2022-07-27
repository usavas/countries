import useSWR from "swr";
import { getAllCountriesForListingApi } from "../api/api";

export const ALL_COUNTRIES_WITH_FIELDS = "allCountriesWithFields";

export default function useCountries() {
  const { data, error, mutate } = useSWR(
    ALL_COUNTRIES_WITH_FIELDS,
    getAllCountriesForListingApi
  );

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
}
