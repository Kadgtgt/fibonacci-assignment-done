/* eslint-disable no-undef */
const { assert } = require('chai');
const fibFunction = require('../fibonacci');

const n = 5;
const y = 6;
const z = 7;

describe('Calculate the Fibonacci series of number', () => {
  it(`Function Fibonacci series of ${n}`, () => {
    const resultArray = fibFunction(n);
    const testArray = [0, 1, 1, 2, 3];
    assert.equal(resultArray.toString(), testArray.toString());
  });

  it(`Function Fibonacci series of ${y}`, () => {
    const resultArray = fibFunction(y);
    const testArray = [0, 1, 1, 2, 3, 5];
    assert.equal(resultArray.toString(), testArray.toString());
  });

  it(`Function Fibonacci series of ${z}`, () => {
    const resultArray = fibFunction(z);
    const testArray = [0, 1, 1, 2, 3, 5, 8];
    assert.equal(resultArray.toString(), testArray.toString());
    console.log();
  });
});
