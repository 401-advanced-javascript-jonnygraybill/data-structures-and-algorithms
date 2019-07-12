'use strict';

const LinkedList = require('../linked-list.js');

it('inserts a new node in the beginning of the linked list', () => {
  let list = new LinkedList();
  list.insert(5);
  list.insert(12);
  list.insert(32);
  expect(list.head.value).toEqual(32);
})

it('if K is greater than the length of linked list (starting at 0), the result is undefined', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  expect(list.findK(4)).toBeUndefined();
 });