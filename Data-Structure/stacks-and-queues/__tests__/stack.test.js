'use strict';

const Stack = require('../stack.js');

describe('Stack tests', () => {

  it('It can instantiate a node correctly', () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  })

})