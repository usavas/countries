import { jsonSearch, getTimesCalled } from "./deepSearch.js";
import fakeCountries from "../api/fakeCountries";
import { fakeData } from "./fakeData";

describe("searchProps", () => {
  test("should find Kabu as capital of Afghanistan", () => {
    const res = jsonSearch(fakeCountries[0], "Kabu");

    expect(res).toBeTruthy();
    console.log("Kabu", getTimesCalled());
  });

  test("should not find the text not existing in an array's items", () => {
    const res = jsonSearch(["tesing", "mes"], "est");

    expect(res).toBeFalsy();
    console.log("est", getTimesCalled());
  });

  test("should find the existing Turkish chars in countries array", () => {
    const res = jsonSearch(fakeCountries, "Türkçe");
    expect(res).toBeTruthy();
  });

  test("should find the Japanese chars in countries array", () => {
    const res = jsonSearch(fakeCountries, "ガニスタン");
    expect(res).toBeTruthy();
  });

  test("should find the deeply nested arabic chars", () => {
    const res = jsonSearch(fakeCountries, "Jāmiʻat ad-Duwal al-ʻArabīyah");
    expect(res).toBeTruthy();
  });

  test("should find the item existing in a sub-array", () => {
    const res = jsonSearch(fakeCountries, ".tr");
    expect(res).toBeTruthy();
  });

  test("should not find Kabule in Afghanistan json data", () => {
    const res = jsonSearch(fakeCountries[0], "Kabule");

    expect(res).toBeFalsy();
    console.log("Kabule", getTimesCalled());
  });

  test("should find Taliban.svg for Afghanistan", () => {
    const res = jsonSearch(fakeCountries[0], "Taliban.svg");

    expect(res).toBeTruthy();
    console.log("Taliban.svg", getTimesCalled());
  });

  test("should return true for another sample data", () => {
    const res = jsonSearch(fakeData, "500 mg");

    expect(res).toBeTruthy();
    console.log("Fake Data", getTimesCalled());
  });
  test("should return true for symbol property", () => {
    const res = jsonSearch(
      {
        id: 1,
        persons: [
          {
            name: {
              first: "John",
              last: "Dash",
            },
            addresses: [
              { street: "John Nash Street, Simon Bolivar Blv, 16554" },
            ],
            [Symbol()]: { test: "test 1" },
          },
          { name: { first: "George", last: "Carlin" } },
        ],
        url: "https://www.youtube.com/bocajs",
        levels: ["beginner", "intermediate", "advanced"],
      },
      "test 1"
    );

    expect(res).toBeTruthy();
  });
});
