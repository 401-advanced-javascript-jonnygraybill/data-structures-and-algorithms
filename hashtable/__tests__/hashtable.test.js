'use strict';

let HashTable = require('../hashtable.js');

describe ('HashTable data structure tests', () => {

  it('Can create a hashtable with a key value pair', () => {
    let hashtable = new HashTable();
    hashtable.add('Batman', 'Bruce Wayne');
    expect(hashtable instanceof HashTable).toBeTruthy();
  })

  it('Can get a value from a key', () => {
    let hashtable = new HashTable();
    hashtable.add('Batman', 'Bruce Wayne');
    expect(hashtable.get('Batman')).toBeDefined();
  })

  it('Can successfully returns null for a key that does not exist', () => {
    let hashtable = new HashTable();
    hashtable.add('Batman', 'Bruce Wayne');
    expect(hashtable.get('Joker')).toBeNull(); 
  })

  it('Can successfully handle a collision', () => {
    let hashtable = new HashTable();
    hashtable.add('Batman', 'Bruce Wayne');
    hashtable.add('Batman', 'Billionaire');
    let linkedlist = hashtable.get('Batman');
    expect(linkedlist.next.val).toBeDefined();
  })

  it('Can successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let hashtable = new HashTable();
    hashtable.add('Batman', 'Bruce Wayne');
    hashtable.add('Batman', 'Billionaire');
    let linkedlist = hashtable.get('Batman');
    expect(linkedlist.next.val).toEqual('Billionaire');
  })

  it('Can successfully hash a key to an in-range value', () => {
    let hashtable = new HashTable();
    let hashed = hashtable.hash('Batman', 'Bruce Wayne');
    expect(hashed).toBeDefined();
  })
})