const util = require('util')

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if(!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.tail = current.next;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let current = this.head;
    while(current) {
      if (current.value === value) {
        console.log(true);
      } else {
        console.log(false);
      }
      current = current.next;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let output = '';
    while(current !== null) {
      output += current.value;
      current = current.next;
    } return console.log(output);
  }

  findK(k) {
    let current = this.head;
    let counter = 1;
    while (current.next) {
      current = current.next;
      counter++;
    }
    let val = counter - k;
    if ((val >= 0) && (val <= counter)) {
      let newCurrent = this.head;
      let result;
      for (let i = 0; i < val; i++) {
        result = newCurrent.value;
        newCurrent = newCurrent.next;
      }
      return result;
    }
  }
}

class moreLinks extends LinkedList {
  append(value) {
    if (this.head === null) {
      this.head = new Node (value);
      return;
    }
    let current = this.head
    while (current.value === null) {
     if (this.head === null) {
       this.head = new Node (value);
       current = current.next;
      }
      current.next = new Node (value);
      return value;
    }
  }
}

module.exports = LinkedList;
