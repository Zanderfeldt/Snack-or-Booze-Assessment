function unroll(squareArray) {
  const n = squareArray.length;
  const result = [];
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    //move right
    for (let i = colStart; i <= colEnd; i++) {
      result.push(squareArray[rowStart][i]);
    }
    rowStart++;

    //move down
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(squareArray[i][colEnd]);
    }
    colEnd--;

    //move left
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(squareArray[rowEnd][i]);
      }
      rowEnd--;
    }

    //move up
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(squareArray[i][colStart]);
      }
      colStart++;
    }
  }
  return result;
}

module.exports = unroll;


// const smallerSquare = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"]
// ];