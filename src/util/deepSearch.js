let timesCalled = 0;

export function deepSearch(obj, string) {
  timesCalled++;
  // if the parameter is null then nothing to check, return false
  if (!obj) {
    return false;
  }

  // if primitive type then just check the content
  if (typeof obj !== "object") {
    if (obj.toString().includes(string)) {
      return true;
    }
    return false;
  }

  // check if it is array
  if (Array.isArray(obj)) {
    for (const item of obj) {
      const r = deepSearch(item, string);
      if (r) {
        return true;
      }
    }
  }

  // if not array then now it is an object
  const props = Object.getOwnPropertyNames(obj);
  for (const p of props) {
    const val = obj[p];

    const r = deepSearch(val, string);
    if (r) return r;
  }

  return false;
}

export function getTimesCalled() {
  return timesCalled;
}
