
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix === []) {
    return [];
  }
  let arr = [];
      for (let i=0; i < matrix.length; i++) {
          for(let j = 0; j < matrix[i].length; j++) {
              if ((i + 1) % 2 != 0) {
                  arr.push(+[matrix[i][j]].join(''));
              } else {
                  n = Number(matrix[i].length-1) - j;
                  arr.push(+[matrix[i][n]].join(''));
              }
          }
      }
  return arr;
}
