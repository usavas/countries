import { jsonSearch, getTimesCalled } from "./deepSearch.js";
import fakeCountries from "../api/fakeCountries";
import { fakeData } from "./fakeData";

describe("searchProps", () => {
  test("should include", () => {
    const res = jsonSearch(fakeCountries[0], "Kabu");

    expect(res).toBeTruthy();
    console.log("Kabu", getTimesCalled());
  });

  test("should not include", () => {
    const res = jsonSearch(["tesing", "mes"], "est");

    expect(res).toBeFalsy();
    console.log("est", getTimesCalled());
  });

  test("should check for Turkish chars", () => {
    const res = jsonSearch(fakeCountries, "Türkçe");
    expect(res).toBeTruthy();
  });

  test("should check for Japanese chars", () => {
    const res = jsonSearch(fakeCountries, "ガニスタン");
    expect(res).toBeTruthy();
  });

  test("should check for deeply nested arabic chars", () => {
    const res = jsonSearch(fakeCountries, "Jāmiʻat ad-Duwal al-ʻArabīyah");
    expect(res).toBeTruthy();
  });

  test("should check for item in array", () => {
    const res = jsonSearch(fakeCountries, ".tr");
    expect(res).toBeTruthy();
  });

  test("should check for numbers", () => {
    const res = jsonSearch(fakeCountries, "");
    expect(res).toBeTruthy();
  });

  test("should not include Kabule", () => {
    const res = jsonSearch(fakeCountries[0], "Kabule");

    expect(res).toBeFalsy();
    console.log("Kabule", getTimesCalled());
  });

  test("should include AFG", () => {
    const res = jsonSearch(fakeCountries[0], "AFG");

    expect(res).toBeTruthy();
    console.log("AFG", getTimesCalled());
  });

  test("should include Taliban.svg", () => {
    const res = jsonSearch(fakeCountries[0], "Taliban.svg");

    expect(res).toBeTruthy();
    console.log("Taliban.svg", getTimesCalled());
  });

  test("should return true for AFN", () => {
    const res = jsonSearch(fakeCountries[0], "AFN");

    expect(res).toBeTruthy();
    console.log("AFN", getTimesCalled());
  });

  test("should return true for fake data", () => {
    const res = jsonSearch(fakeData, "500 mg");

    expect(res).toBeTruthy();
    console.log("Fake Data", getTimesCalled());
  });
  test("should return true for number", () => {
    const res = jsonSearch(
      {
        id: 1,
        description: "South Florida's Best Meetups on Youtube",
        url: "https://www.youtube.com/bocajs",
        types: ["tutorial"],
        topics: ["js", "html"],
        levels: ["beginner", "intermediate", "advanced"],
      },
      "://"
    );

    expect(res).toBeTruthy();
  });
});
