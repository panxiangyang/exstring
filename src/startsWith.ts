/**
 * Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
 *
 * @function
 * @param {String} str A manipulated string
 * @param {String} search The characters to be searched
 * @param {Number} position The position in this string at which to begin searching for search; defaults to 0.
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * startsWith('fxtest', 'fx');
 * // -> false
 * startsWith('fxtest', 'fo');
 */
const startsWith = (
  str: string,
  search: string,
  position: number = 0
): boolean => {
  position = !position || position < 0 ? 0 : +position;
  return str.substring(position, position + search.length) === search;
};
export default startsWith;
