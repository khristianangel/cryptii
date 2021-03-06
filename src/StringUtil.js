
let iterator = 0

/**
 * Utility class providing static methods for common string operations.
 */
export default class StringUtil {
  /**
   * Translates camel case to regular string.
   * @see https://stackoverflow.com/a/6229124/490161
   * @example
   * let a = StringUtil.camelCaseToRegular('helloWorld')
   * // returns 'Hello World'
   * let b = StringUtil.camelCaseToRegular('ILoveYOU')
   * // returns 'I Love YOU'
   * @param {string} string
   * @return {string}
   */
  static camelCaseToRegular (string) {
    return string
      // insert a space between lower case & upper case characters
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper case in a sequence followed by lower case
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, first => first.toUpperCase())
  }

  /**
   * Returns unique identifier for current session.
   * @return {string}
   */
  static uniqueId () {
    let uid = new Date().getTime() + (++iterator)
    return uid.toString(16)
  }

  /**
   * Separates string into chunks of given length.
   * @param {string} string
   * @param {number} length
   * @return {string[]}
   */
  static chunk (string, length) {
    return string !== '' ? string.match(new RegExp(`.{1,${length}}`, 'g')) : []
  }

  /**
   * Returns true, if given string contains a whitespace at given index.
   * @param {string} string
   * @param {number} [index=0]
   * @return {boolean}
   */
  static isWhitespace (string, index = 0) {
    let character = string[index]
    return character ? character.match(/\s/) !== null : false
  }

  /**
   * Converts whitespace characters to U+20 space character.
   * If requested, reduces strings of whitespaces to a single one.
   * @param {[type]} string [description]
   * @param {Boolean} [reduceToSingle=false] [description]
   * @return {[type]} [description]
   */
  static normalizeWhitespaces (string, reduceToSingle = false) {
    return reduceToSingle
      ? string.replace(/\s+/, ' ')
      : string.replace(/\s/, ' ')
  }
}
