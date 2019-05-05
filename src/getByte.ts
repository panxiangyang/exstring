/**
 * Get the byte of string.
 *
 * @function
 * @param {String} str A manipulated string
 * @param {Number} fix Number of digits converted. by default is 2
 * @returns {Number}
 * @example
 *
 * // -> 6
 * getByte('你好fx');
 */
const getByte = (str: string, fix: number = 2): number => {
  return str.replace(/[^\x00-\xff]/g, new Array(fix + 1).join('-')).length;
};
export default getByte;
