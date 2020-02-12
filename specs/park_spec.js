const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassy Perk', 300);


    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2= new Dinosaur('frog', 'omnivore', 5);
    dinosaur3 = new Dinosaur('pterydoctal', 'carnivore', 500);
    dinosaur4 = new Dinosaur('Rapping Raptor', 'carnivore', 60)




  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassy Perk')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 300)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.aSeriesOfDinosaurs.length
    const expected = 0
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.AddDino(dinosaur);
    const actual = park.aSeriesOfDinosaurs.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.AddDino(dinosaur);
    park.MinusDino(dinosaur);
    const actual = park.aSeriesOfDinosaurs.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.AddDino(dinosaur);
    park.AddDino(dinosaur2);
    park.AddDino(dinosaur3);
    park.AddDino(dinosaur4);
    const actual = park.popularDino();
    const expected = dinosaur3;
    assert.strictEqual(actual, expected);

  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.AddDino(dinosaur);
    park.AddDino(dinosaur2);
    park.AddDino(dinosaur3);
    park.AddDino(dinosaur4);
    const actual = park.findSpecies(dinosaur);
    const expected = species('t-rex');
    assert.deepEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
