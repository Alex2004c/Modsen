'use strict';

function containsEquivalentProperties(obj1, obj2) {
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys2 = Object.keys(obj2);

  for (const key of keys2) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (!obj1.hasOwnProperty(key)) {
      return false;
    }

    const areObjects = typeof val1 === 'object' && val1 !== null && typeof val2 === 'object' && val2 !== null;

    if (areObjects) {
      if (!containsEquivalentProperties(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}