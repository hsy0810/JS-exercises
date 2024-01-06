export function substring(str, indexStart, indexEnd) {
  const result = str.substring(indexStart, indexEnd);
  return result;
}

export function slice(str, indexStart, indexEnd) {
  const result = str.slice(indexStart, indexEnd);
  return result;
}

export function padStart(str, targetLength, padString) {
  const result = str.padStart(targetLength, padString);
  return result;
}

export function trim(str) {
  const result = str.trim();
  return result;
}
