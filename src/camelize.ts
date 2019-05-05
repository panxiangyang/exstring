/**
 * Converts a string containing '-' or '_' to hump style.
 *
 * @function
 * @param {String} str A string
 * @returns {String} A hump style string
 * @example
 *
 * // -> fxString
 * camelize('fx-string');
 *
 * // -> fxString
 * camelize('fx_string');
 */
const camelize = (str: string): string => {
  return str.replace(/[-_][^-_]/g, (match: any) => {
    return match.charAt(1).toUpperCase();
  });
};
export default camelize;
