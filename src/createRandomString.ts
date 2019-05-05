/**
 * Create a random string.
 *
 * @function
 * @param {Number} len - The length of random string
 * @return {String}
 * @example
 *
 * createRandomString();
 * createRandomString(5);
 */
const createRandomString = (length: number = 0): string => {
  let str = '';
  // toSting接受的参数表示进制，默认为10进制。36进制为0-9 a-z
  while (str.length < length) {
    str += Math.random()
      .toString(36)
      .substr(2);
  }
  return str.substr(0, length);
};
export default createRandomString;
