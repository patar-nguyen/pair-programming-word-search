const transpose = require('./matrix_transposition')

const wordSearch = (letters, word) => {
    if (letters.length === 0) {
      return false;
    } 
    const horizontalJoin = letters.map(ls => ls.join(''));
    let transposed = transpose(letters);
    const verticalJoin = transposed.map(vs => vs.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
  
      for (let v of verticalJoin) {
        if (v.includes(word)) return true;
      }
    }
  
    return false;
  
  };
  
  module.exports = wordSearch;