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
