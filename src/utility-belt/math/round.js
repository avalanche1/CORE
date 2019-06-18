/**
 * @description: Rounds a float number to a given number of decimals
 * @exampleInput: 83.555, 2
 * @exampleOutput: 83.56
 * @hasTests: false
 */
export function round(value, decimalPlaces = 0) {
  const multiplier = Math.pow(10, decimalPlaces);
  const result = Math.round(value * multiplier + Number.EPSILON) / multiplier;
  return result;
}
