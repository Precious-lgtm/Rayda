/**
 * @param {*} str 
 * @param {*} length 
 * @returns These functions are used in the application for smaller tasks such
 * as truncating strings and retrieving specific information from 
 * endpoint results
 */

export function truncate(str, length) {
    if (str.length > 55) {
      return str.slice(0, length) + '...';
    } else return str;
  }

export function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word.charAt(0))
      .join('');
  
    return firstLetters;
  }
