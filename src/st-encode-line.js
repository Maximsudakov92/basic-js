import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = str.split('');
  let count = 1;
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      count++
    } else if (arr[i] !== arr[i + 1] && arr[i] !== arr[i -1]) {
      result.push(arr[i])
    } else {
      result.push(`${count}${arr[i]}`)
      count = 1;
    }
  }
 return result.join('')
}
