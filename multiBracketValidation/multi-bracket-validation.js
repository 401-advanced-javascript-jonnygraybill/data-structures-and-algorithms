'use strict';

class BracketStack {
  constructor() {
    this.tempBrackets = [];
    this.count = 0;
  }

  push(value) {
    this.tempBrackets.push(value);
    this.count += 1;
  }

  pop() {
    this.tempBrackets.pop();
    this.count -= 1;
  }

  peek() {
    let endingBracket;
    if (this.tempBrackets.length !== 0) {
      for (let i = 0; i < this.tempBrackets.length; i++) {
        endingBracket = i;
      }
      return this.tempBrackets[endingBracket];
    }
    return undefined;
  };

  balancedBrackets(str) {
    const valid = new BracketStack();
    if (typeof string !== 'string') {
      return false;
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
        valid.push(string[i]);
      }

      if (string[i] === '}') {
        if (valid.peek() === '{') {
          valid.pop();
        }
      }

      if (string[i] === ')') {
        if (valid.peek() === '(') {
          valid.pop();
        }
      }
      
      if (string[i] === ']') {
        if (valid.peek() === '[') {
          valid.pop();
        }
      }
    }
    return valid.size === 0;
  }
}

let balancedBrackets = new BracketStack();

module.exports = BracketStack;