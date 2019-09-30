'use strict';

function hasDuplicates(stringInput) {
  let storage = Object.create(null);
  let splitInput = stringInput.split(' ');
  for (let i = 0; i < splitInput.length; i++) {
      let value = splitInput[i];
      if (value in storage) {
          return value;
      }
      storage[value] = true;
  }
  return false;
}

hasDuplicates('A sample input that has a duplicate word');