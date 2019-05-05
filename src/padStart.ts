/**
 * Pads the current string with another string until the resulting string reaches the given length.
 *
 * @function
 * @param {String} str A manipulated string
 * @param {Number} targetLength The length of the resulting string
 * @param {String} padString The string to pad the current string with
 * @returns {String}
 * @example
 *
 * // -> 00Fx
 * padStart('Fx', 4, '0');
 */
const padStart = (
  str: string,
  targetLength: number,
  padString: string = ' '
): string => {
  const length = str.length;
  if (length > targetLength) {
    return str;
  }
  targetLength = targetLength - length;
  if (targetLength > padString.length) {
    // append to original to ensure we are longer than needed
    padString += new Array(Math.floor(targetLength / padString.length)).join(
      padString
    );
  }
  return padString.slice(0, targetLength) + str;
};
export default padStart;
