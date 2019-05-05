/**
 * Removes whitespace from both ends of a string.
 *
 * @function
 * @param {String} str A manipulated string
 * @returns {String}
 * @example
 *
 * // -> 'Fx'
 * trim(' Fx ');
 * trim(' Fx');
 * trim('Fx ');
 */
const trim = (str: string): string => {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

export default trim;
