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

  isLongerThan(list) {
    return (this.length() > list.length() ?
      true : false);
  }

  length() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while (current.next) {
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
    while (current) {
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
    while (current !== null) {
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

  zipLists(list1, list2) {
    let longer;
    let shorter;
    if (list1.isLongerThan(list2)) {
      longer = list1;
      shorter = list2;
    } else {
      longer = list2;
      shorter = list1;
    }
  
    let longerCurrent = longer.head;
    let shorterCurrent = shorter.head;
  
    while (shorterCurrent) {
      let shorterNext = shorterCurrent.next;
      let longerNext = longerCurrent.next;
      longerCurrent.next = shorterCurrent;
      shorterCurrent.next = longerNext;
      shorterCurrent = shorterNext;
      longerCurrent = longerNext;
    }
    return longer.head;
  }

  
}




class moreLinks extends LinkedList {
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    let current = this.head
    while (current.value === null) {
      if (this.head === null) {
        this.head = new Node(value);
        current = current.next;
      }
      current.next = new Node(value);
      return value;
    }
  }
}

module.exports = LinkedList;
