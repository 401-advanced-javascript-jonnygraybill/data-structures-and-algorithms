const util = require('util')

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
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
}

let list = new LinkedList();
list.append('I ');
list.append('don\'t ');
list.append('want ');
list.append('to ');
list.append('do ');
list.append('this.');
list.insert('Henlo, ');
list.includes('Henlo, ');
list.toString();
console.log(util.inspect(list,{depth:10}));


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

let newList = new moreLinks();
newList.append('#oof');