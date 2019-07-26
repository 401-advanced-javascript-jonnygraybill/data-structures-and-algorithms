'use strict';

const AnimalShelter = require('../fifoAnimalShelter/fifo-animal-shelter.js');

describe('AnimalShelter tests', () => {
  it('It can instantiate a shelter correctly', () => {
    let shelter = new AnimalShelter();
    expect(shelter instanceof AnimalShelter).toBeTruthy();
  })
})