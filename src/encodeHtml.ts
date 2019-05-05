/**
 * Encode the html tags in string.
 *
 * @function
 * @see https://github.com/janl/mustache.js/blob/master/mustache.js#L60
 * @param {String} str A string contains html tags
 * @returns {String}
 * @example
 *
 * // -> '&lt;div&gt;Fx&lt;&#x2F;div&gt;'
 * encodeHtml('<div>Fx</div>');
 */
const encodeHtml = (str: string): string => {
  const escapeMap: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  return str.replace(/[&<>"'`=\/]/g, (capture: string) => {
    return escapeMap[capture];
  });
};
export default encodeHtml;
