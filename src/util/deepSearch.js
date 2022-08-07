let timesCalled = 0;

export function jsonSearch(json, string, caseSensitive) {
  timesCalled++;

  // if the parameter is null then nothing to check, return false
  if (!json || typeof json === "boolean") {
    return false;
  }

  // if primitive type then just check the content
  if (typeof json !== "object") {
    const jsonSearched = caseSensitive
      ? String(json)
      : String(json).toLowerCase();
    const textToSearchFor = caseSensitive ? string : string.toLowerCase();

    const res = jsonSearched.includes(textToSearchFor);
    return res;
  }

  // check if it is array
  if (Array.isArray(json)) {
    for (const item of json) {
      const r = jsonSearch(item, string, caseSensitive);
      if (r) {
        return true;
      }
    }
  }

  // if not array then now it is an object
  const props = Object.getOwnPropertyNames(json);
  for (const p of props) {
    const val = json[p];

    const r = jsonSearch(val, string, caseSensitive);
    if (r) return r;
  }

  return false;
}

export function getTimesCalled() {
  return timesCalled;
}
