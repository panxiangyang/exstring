'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var camelize = function(str) {
  return str.replace(/[-_][^-_]/g, function(match) {
    return match.charAt(1).toUpperCase();
  });
};

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
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

/**
 * Create a random string.
 *
 * @function
 * @param {Number} len - The length of random string
 * @return {String}
 * @example
 *
 * createRandomString();
 * createRandomString(5);
 */
var createRandomString = function(length) {
  if (length === void 0) {
    length = 0;
  }
  var str = '';
  // toSting接受的参数表示进制，默认为10进制。36进制为0-9 a-z
  while (str.length < length) {
    str += Math.random()
      .toString(36)
      .substr(2);
  }
  return str.substr(0, length);
};

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
var decodeHtml = function(str) {
  var escapeMap = {
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
    function(caputer) {
      return escapeMap[caputer];
    }
  );
};

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
var encodeHtml = function(str) {
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  return str.replace(/[&<>"'`=\/]/g, function(capture) {
    return escapeMap[capture];
  });
};

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
var endsWith = function(str, search, position) {
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  return str.substring(position - search.length, position) === search;
};

/**
 * Get the byte of string.
 *
 * @function
 * @param {String} str A manipulated string
 * @param {Number} fix Number of digits converted. by default is 2
 * @returns {Number}
 * @example
 *
 * // -> 6
 * getByte('你好fx');
 */
var getByte = function(str, fix) {
  if (fix === void 0) {
    fix = 2;
  }
  return str.replace(/[^\x00-\xff]/g, new Array(fix + 1).join('-')).length;
};

/**
 * Create a random GUID.
 *
 * @function
 * @see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @returns {String}
 * @example
 *
 * guid();
 */
var guid = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // tslint:disable-next-line
    var r = (Math.random() * 16) | 0;
    // tslint:disable-next-line
    var v = c === 'x' ? r : (r & 0x3) | 0x8; // tslint:disable-line
    return v.toString(16);
  });
};

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
var padEnd = function(str, targetLength, padString) {
  if (padString === void 0) {
    padString = ' ';
  }
  var length = str.length;
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
var padStart = function(str, targetLength, padString) {
  if (padString === void 0) {
    padString = ' ';
  }
  var length = str.length;
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
var repeat = function(str, count) {
  if (count === void 0) {
    count = 1;
  }
  return new Array(Math.floor(count) + 1).join(str);
};

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
var startsWith = function(str, search, position) {
  if (position === void 0) {
    position = 0;
  }
  position = !position || position < 0 ? 0 : +position;
  return str.substring(position, position + search.length) === search;
};

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
var trim = function(str) {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

/**
 * Removes whitespace from the beginning of a string.
 *
 * @function
 * @param {String} str A manipulated string
 * @returns {String}
 * @example
 *
 * // -> Fx
 * trimLeft(' Fx');
 */
var trimStart = function(str) {
  return str.replace(/^\s*/, '');
};

/**
 *  Removes whitespace from the end of a string.
 *
 * @function
 * @param {String} str A manipulated string
 * @returns {String}
 * @example
 *
 * // -> Fx
 * trimEnd('Fx ');
 */
var trimEnd = function(str) {
  return str.replace(/\s*$/, '');
};

exports.camelize = camelize;
exports.capitalize = capitalize;
exports.createRandomString = createRandomString;
exports.decodeHtml = decodeHtml;
exports.encodeHtml = encodeHtml;
exports.endsWith = endsWith;
exports.getByte = getByte;
exports.guid = guid;
exports.padEnd = padEnd;
exports.padStart = padStart;
exports.repeat = repeat;
exports.startsWith = startsWith;
exports.trim = trim;
exports.trimEnd = trimEnd;
exports.trimStart = trimStart;
