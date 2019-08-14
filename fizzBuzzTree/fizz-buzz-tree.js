'use strict';

 function fizzBuzz(tree){
    function traverse(value){
      let arr = [];
      if(value % 15 === 0) {
        arr.push('fizzbuzz');
      } else if(value % 5 === 0) {
        arr.push('buzz');
      } else if(value % 3 === 0) {
        arr.push('fizz');
      } else {
        arr.push(value);
      }
      return arr;
    }

    let current = tree.root;

    function iteration(current) {
      if(current.left) {
        iteration(current.left);
      }
      if(current.right) {
        iteration(current.right)
      }
      current.val = traverse(current.val);
    }

    iteration(current);
    return traverse(tree.root);
  }

module.exports = fizzBuzz;