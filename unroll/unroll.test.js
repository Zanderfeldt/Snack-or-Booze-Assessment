const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("should return an empty array for an empty input array", function () {
    const emptySquare = [];
    const result = unroll(emptySquare);
    expect(result).toEqual([]);
  });

  it("should return the same single element array for an array with one element", function () {
    const singleSquare = [[333]];
    const result = unroll(singleSquare);
    expect(result).toEqual([333]);
  });

  it("should unroll a 2x2", function () {
    const square = [
      ['A', 'B'],
      ['C', 'D']
    ];
    const result = unroll(square);
    expect(result).toEqual(['A','B','D','C']);
  });

  it("should unroll a 3x3", function () {
    const square = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I']
    ];
    const result = unroll(square);
    expect(result).toEqual(['A','B','C','F','I','H','G','D','E']);
  });
  
});
