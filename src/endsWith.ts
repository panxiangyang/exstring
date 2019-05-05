/**
 * Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
 *
 * @function
 * @param {String} str A manipulated string
 * @param {String} search The characters to be searched
 * @param {Number} position? Specify where to start searching. By defaut is str.length
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * endsWith('testfx', 'fx');
 * // -> false
 * endsWith('testfx', 'Fx');
 */
const endsWith = (str: string, search: string, position?: number): boolean => {
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  return str.substring(position - search.length, position) === search;
};

export default endsWith;
