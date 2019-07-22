'use strict';

const LinkedList = require('../linked-list.js');
const zipLists = LinkedList.zipLists;

it('inserts a new node in the beginning of the linked list', () => {
  let list = new LinkedList();
  list.insert(5);
  list.insert(12);
  list.insert(32);
  expect(list.head.value).toEqual(32);
})


//Find K Tests
it('if K is greater than the length of linked list (starting at 0), the result is undefined', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  expect(list.findK(4)).toBeUndefined();
 });

 //Zip List Tests
 it('Can check the length and compare lengths of two linked lists', () => {
  let list1 = new LinkedList();
  list1.append(5);
  list1.append(15);
  list1.append(17);
  list1.append(20);
  list1.append(21);
  let list2 = new LinkedList();
  list2.append(31);
  list2.append(17);
  list2.append(12);
  expect(list1.isLongerThan(list2)).toBeTruthy();
  expect(list2.isLongerThan(list1)).toBeFalsy();
});