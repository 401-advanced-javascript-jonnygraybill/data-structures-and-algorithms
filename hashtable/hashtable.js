function HashTable(length) {
  this.buckets = Array(length);
  this.bucketsLength = this.buckets.length;
}

function HashNode(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
}

HashTable.prototype.hash = function(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.bucketsLength;
};

HashTable.prototype.add = function(key, val) {
  let index = this.hash(key);
  if (!this.buckets[index])
    this.buckets[index] = new HashNode(key, val);
    else {
      let currentNode = this.buckets[index];
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, val)
    }
}

HashTable.prototype.get = function(key) {
    let index = this.hash(key);
    let currentNode = this.buckets[index];
    if (!currentNode) return null;
    else if (currentNode.key === key) return currentNode.val;
    else {
        while (currentNode.next) {
            if (currentNode.key === key) return currentNode.val;
            currentNode = currentNode.next;
        }
    }
    return null;
};

HashTable.prototype.contains = function(key) {
  let index = this.hash(key);
  let currentNode = this.buckets[index];
  if (currentNode) {
    return true;
  } else {
    return false;
  }
}

let hashtable = new HashTable(1024);
console.log(hashtable.add('Batman', 'Bruce Wayne'));
console.log(hashtable.buckets);
console.log(hashtable.get('Batman'));
console.log(hashtable.contains('Batman'));
console.log(hashtable.contains('Joker'))
