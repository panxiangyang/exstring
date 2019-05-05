/**
 * Removes whitespace from the beginning of a string.
 *
 * @function
 * @param {String} str A manipulated string
 * @returns {String}
 * @example
 * 
 * // -> Fx
 * trimLeft(' Fx');
 */
const trimStart = (str: string): string => {
  return str.replace(/^\s*/, '');
};
export default trimStart;
