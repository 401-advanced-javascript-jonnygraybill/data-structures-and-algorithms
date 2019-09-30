'use strict';

let BinaryTree = require('../../tree/tree.js').BinaryTree;
let Node = require('../../tree/tree.js').Node;
let tree_intersection = require('../tree-intersection.js');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);


describe('Tree Intersection Tests', () => {
  it('Can return duplicate values from two binary trees', () => {
    let tree = new BinaryTree();
    tree.root = two;
    tree.root.right = five;
    tree.root.left = three;
    let tree2 = new BinaryTree();
    tree2.root = one;
    tree2.root.right = three;
    tree2.root.left = seven;
    let results = tree_intersection(tree, tree2);
    expect(results).toEqual([3]);
  });
});