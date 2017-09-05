export function isNullOrUndefinedOrTemp(value) {
  return value === null || value === undefined || value === '';
}

// 判断是否是整数
export function isInt(value) {
  return /^-?[1-9]\d*$/.test(value);
}

// 判断是否是正整数
export function isPositiveInt(value) {
  return /^[1-9]\d*$/.test(value);
}

// 判断是否是浮点数
export function isNumber(value) {
  return /^-?([1-9]\d*|[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/.test(value);
}

// 判断是否是正浮点数
export function isPositiveNumber(value) {
  return /^[1-9]\d*|[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/.test(value);
}