/**
 * Decode the html tags in string.
 *
 * @function
 * @param {String} str A string contains html tags
 * @returns {String}
 * @example
 *
 * // -> <div>Fx</div>
 * decodeHtml('&lt;div&gt;Fx&lt;&#x2F;div&gt;');
 */
const decodeHtml = (str: string): string => {
  const escapeMap: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#x2F;': '/',
    '&#x60;': '`',
    '&#x3D;': '='
  };
  return str.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;|&#x2F;|&#x60;|&#x3D;)/g,
    (caputer: string) => {
      return escapeMap[caputer];
    }
  );
};
export default decodeHtml;
