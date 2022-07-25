import { deepSearch, getTimesCalled } from "./deepSearch.js";
import fakeCountries from "../api/fakeCountries";
import { fakeData } from "./fakeData";

describe("searchProps", () => {
  test("should include", () => {
    const res = deepSearch(fakeCountries[0], "Kabu");

    expect(res).toBeTruthy();
    console.log("Kabu", getTimesCalled());
  });

  test("should not include", () => {
    const res = deepSearch(["tesing", "mes"], "est");

    expect(res).toBeFalsy();
    console.log("est", getTimesCalled());
  });

  test("should not include Kabule", () => {
    const res = deepSearch(fakeCountries[0], "Kabule");

    expect(res).toBeFalsy();
    console.log("Kabule", getTimesCalled());
  });

  test("should include AFG", () => {
    const res = deepSearch(fakeCountries[0], "AFG");

    expect(res).toBeTruthy();
    console.log("AFG", getTimesCalled());
  });

  test("should include Taliban.svg", () => {
    const res = deepSearch(fakeCountries[0], "Taliban.svg");

    expect(res).toBeTruthy();
    console.log("Taliban.svg", getTimesCalled());
  });

  test("should return true for AFN", () => {
    const res = deepSearch(fakeCountries[0], "AFN");

    expect(res).toBeTruthy();
    console.log("AFN", getTimesCalled());
  });

  test("should return true for fake data", () => {
    const res = deepSearch(fakeData, "500 mg");

    expect(res).toBeTruthy();
    console.log("Fake Data", getTimesCalled());
  });
});
