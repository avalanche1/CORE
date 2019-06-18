export async function async_forEach(array, callback) {
  let result = null; // eslint-disable-line fp/no-let
  // eslint-disable-next-line fp/no-loops,fp/no-let,fp/no-mutation
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop,callback-return,fp/no-mutation
    result = await callback(array[index], index, array);
  }
  return result;
}
