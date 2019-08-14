'use strict';

class Node {
  constructor (val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let storage = [];
    let traverse = function(node) {
      storage.push(node.value);
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
    };
    traverse(this.root);
    return storage;
  }

  postOrder(){
    let storage = [];
    let traverse = function(node) {
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
      storage.push(node.value);
    };
    traverse(this.root);
    return storage;
  }

  inOrder(){
    let storage = [];
    let traverse = function(node) {
      if(node.left) {
        traverse(node.left)
      }
      storage.push(node.value);
      if(node.right) {
        traverse(node.right)
      }
    };
    traverse(this.root);
    return storage;
  }

  breadthFirst() {
    let array = [];
    let queue = [];
    queue.push(this.root);

    while(queue.length) {
      let current = queue.shift();
      array.push(current.value);
      if (current.left) {
        queue.push(current.left)
      };
      if (current.right) {
        queue.push(current.right)
      };
    };
    return array;
  }

  findMaximumRightValue() {
    if (this.root === null) {
      throw "Oof!";
    }
    let currentNode = this.root;
    while (currentNode.right !== null) {
       currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  findMaximumLeftValue() {
    if (this.root === null) {
      throw "Oof!";
    }
    let currentNode = this.root;
    while (currentNode.left !== null) {
       currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  findMaximumValue() {
    if (this.findMaximumLeftValue() > this.findMaximumRightValue()) {
      return this.findMaximumLeftValue();
    } else {
      return this.findMaximumRightValue();
    }
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    let traverse = function(node) {
      if(value < node.value) {
        if(node.left) {
          traverse(node.left)
        }
        else {
          node.left = new Node(value);
        }
      } 
      if(value > node.value) {
        if(node.right) {
          traverse(node.right)
        }
        else {
          node.right = new Node(value);
        }
      }     
      return;
    }
    traverse(this.root)
  }

  contains(value){
    return this.preOrder().includes(value);
  }
}

module.exports =  { BinaryTree, Node };