const assert = require('assert')

const sum = (n1, n2) => {
  return n1 + n2;
}

describe('sum', () => {
  // 測試算出來的平均是不是 2.5
  it('should return the sum of two numbers', done => {
    const n1 = 10, n2 = 5;
    const expected = 15;
    
    const result = sum(n1, n2);
    assert.equal(result, expected);
    done();
  });


})