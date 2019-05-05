/**
 * Returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
 *
 * @function
 * @param {String} str A manipulated string
 * @param {Number} count An integer between 0 and +∞: [0, +∞)
 * @returns {String}
 * @example
 *
 * // -> fxfxfxfx
 * repeat('fx', 4);
 */
const repeat = (str: string, count: number = 1): string => {
  return new Array(Math.floor(count) + 1).join(str);
};
export default repeat;
