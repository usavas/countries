import useSWR from "swr";
import { getAllCountriesApi } from "../api/api";

export const ALL_COUNTRIES_WITH_FIELDS = "allCountries";

export default function useCountries() {
  const { data, error, mutate } = useSWR(
    ALL_COUNTRIES_WITH_FIELDS,
    getAllCountriesApi
  );

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
}
