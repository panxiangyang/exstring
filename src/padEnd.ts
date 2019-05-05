/**
 * Pads the current string with a given string so that the resulting string reaches a given length.
 *
 * @function
 * @param {String} str A manipulated string
 * @param {Number} targetLength The length of the resulting string
 * @param {String} padString The string to pad the current string with.
 * @returns {String}
 * @example
 *
 * // -> Fx00
 * padEnd('Fx', 4, '0');
 */
const padEnd = (
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
  return str + padString.slice(0, targetLength);
};

export default padEnd;
