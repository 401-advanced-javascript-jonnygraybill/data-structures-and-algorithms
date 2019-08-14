'use strict';

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

module.exports =  BinarySearchTree;