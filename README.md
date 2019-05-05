# Exstring

Extended string operation. Support for all major browsers.

- Works in IE8+
- Accepts any character
- Heavily tested
- No dependency
- Supports CommonJS/ES Module/UMD

## Installation

### Direct download

Download the script from `dist/exstring.umd.js` and include it.

```html
<script src="/path/to/exstring.umd.js"></script>
```

### Package Managers

```
npm install exstring --save
```

## Basic Usage

### UMD

```javascript
// padStart
Exs.padStart('Fx', 5, '$');
```

### CJS / ES

```javascript
import { padStart } from 'exstring';

// padStart
padStart('Fx', 5, '$');
```

## API

| Method             | Parameter  | Returns  | Describe     |
| ------------------ | --------------- | -------- | ---------------- |
| camelize | (str: string) | String | Converts a string containing '-' or '_' to hump style. |
| capitalize | (str: string) | String | Capitalize the first letter. |
| createRandomString | (length: number = 0) | String | Create a random string. |
| decodeHtml | (str: string)  | String | Decode the html tags in string. |
| encodeHtml | (str: string)  | String | Encode the html tags in string. |
| endsWith | (str: string) | Boolean | Determines whether a string ends with the characters of a specified string, returning true or false as appropriate. |
| getByte |  (str: string, fix: number = 2) | Number | Get the byte of string. |
| guid | () | String | Create a random GUID. |
| padEnd | (str: string, targetLength: number, padString: string = '') | String | Pads the current string with a given string so that the resulting string reaches a given length. |
| padStart | (str: string, targetLength: number, padString: string = '') | String | Pads the current string with another string until the resulting string reaches the given length. |
| repeat | (str: string, count: number = 1) | String | Returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. |
| startsWith | (str: string, search: string, position: number = 0) | Boolean | Determines whether a string begins with the characters of a specified string, returning true or false as appropriate. |
| trim | (str: string) | String | Removes whitespace from both ends of a string. |
| trimStart | (str: string) | String | Removes whitespace from the beginning of a string. |
| trimEnd | (str: string) | String | Removes whitespace from the end of a string. |
