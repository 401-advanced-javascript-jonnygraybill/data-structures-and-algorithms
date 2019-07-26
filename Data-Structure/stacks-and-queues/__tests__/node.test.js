'use strict';

const Node = require('../node.js');

describe('Node tests', () => {

  it('It can instantiate a node correctly', () => {
    let node = new Node(1);
    expect(node instanceof Node).toBeTruthy();
    expect(node.value).toEqual(1);
  })

})