'use strict';

const Queue = require('../queue.js');

describe('Queue tests', () => {

  it('It can instantiate a queue correctly', () => {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  })
})