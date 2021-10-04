import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = n + '';
  let arr = str.split('').map(item => +item);
  let elem = Math.min(...arr);
  let index = arr.indexOf(elem);
  arr.splice(index, 1);
  return +arr.join('')
}
