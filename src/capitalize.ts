/**
 * Capitalize the first letter.
 *
 * @function
 * @param {String} str A manipulated string
 * @returns {String}
 * @example
 *
 * // -> Fx
 * capitalize('fx');
 */
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

export default capitalize;
