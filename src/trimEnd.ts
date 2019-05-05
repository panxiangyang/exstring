/**
 *  Removes whitespace from the end of a string.
 *
 * @function
 * @param {String} str A manipulated string
 * @returns {String}
 * @example
 *
 * // -> Fx
 * trimEnd('Fx ');
 */
const trimEnd = (str: string): string => {
  return str.replace(/\s*$/, '');
};
export default trimEnd;
