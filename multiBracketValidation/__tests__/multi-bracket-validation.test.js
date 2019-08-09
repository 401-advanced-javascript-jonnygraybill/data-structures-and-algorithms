'use strict';

const BracketStack = require('../multi-bracket-validation.js');

describe('Balanced Brackets', () => {
  test('Return false if there aren\t enough brackets', () => {
    const bracketStack = new BracketStack();
    let result = bracketStack.balancedBrackets('([{)');
    expect(result).toEqual(false);
  });

  test('Return false if the input is not a string', () => {
    const bracketStack = new BracketStack();
    let result = bracketStack.balancedBrackets('Henlo fren. Let\s be frens.');
    expect(result).toEqual(false);
  });

  test('Return false if the brackets are not balanced', () => {
    const bracketStack = new BracketStack();
    let result = bracketStack.balancedBrackets('{}[][[]');
    expect(result).toEqual(false);
  });
});