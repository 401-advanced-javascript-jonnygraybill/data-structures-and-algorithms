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
let eight = new Node(8);
let nine = new Node(9);
let ten = new Node(10);
let eleven = new Node(11);
let twelve = new Node(12);
let thirteen = new Node(13);
let fourteen = new Node(14);
let fifteen = new Node(15);


describe('Tree Data Structure Tests', () => {

  it('Can return duplicate values from two binary trees', () => {
    let tree = new BinaryTree();
    tree.root = two;
    tree.root.right = five;
    tree.root.left = three;
    tree.root.left = ten;
    tree.root.right = six;
    tree.root.right = nine;
    tree.root.left = twelve;
    tree.root.right = eleven;
    tree.root.left = four;
    let tree2 = new BinaryTree();
    tree2.root = one;
    tree2.root.right = thirteen;
    tree2.root.left = fifteen;
    tree2.root.left = fourteen;
    tree2.root.right = six;
    tree2.root.right = nine;
    tree2.root.left = twelve;
    tree_intersection(tree, tree2)
  });
});