import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let arr = email.split('');
  let index = [];
  for(let i = arr.length; i >= 0; i--) {
    if(arr[i] === '@') {
      break;
    }
    index.push(arr[i])
  }
  return index.reverse().join('')
}
