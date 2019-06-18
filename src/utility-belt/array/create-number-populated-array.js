/**
 * @description: Creates a number array with specified start, end and increment step
 * @exampleInput: 0, 10, 3
 * @exampleOutput: [0, 3, 6, 9]
 * @hasTests: false
 */
function create_number_populated_array(startValue, endValue, step) {
  return Array.from(
    /*eslint-disable no-mixed-operators, id-length*/
    {length: (endValue - startValue) / step + 1},
    (_, i) => startValue + i * step,
    /*eslint-enable no-mixed-operators, id-length*/
  );
}