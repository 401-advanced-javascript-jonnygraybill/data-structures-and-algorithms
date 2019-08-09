'use strict';

let BinaryTree = require('../tree.js').BinaryTree;
let Node = require('../tree.js').Node;

let one = new Node(1);
let seven = new Node(7);
let five = new Node(5);
let four = new Node(4);

describe('Tree Data Structure Tests', () => {

  it('Can create a tree', () => {
    let tree = new BinaryTree();
    expect(tree).toEqual({ root: null });
  });

  it('Can create a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = four;
    expect(tree.root.value).toEqual(4);
  });

  it('Can add right child to a single root node', () => {
    let tree = new BinaryTree();
    tree.root = one;
    tree.root.right = five;
    expect(tree.root.right.value).toBe(5);
  });

  it('Can add a left child to a single root node', () => {
    let tree = new BinaryTree();
    tree.root = one;
    tree.root.right = five;
    tree.root.left = seven;
    expect(tree.root.left.value).toBe(7);
  });
})