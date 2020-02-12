const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.aSeriesOfDinosaurs = [];





  Park.prototype.AddDino = function (dino) {
    this.aSeriesOfDinosaurs.push(dino)
  };

  Park.prototype.MinusDino = function (dino) {
    this.aSeriesOfDinosaurs.shift(dino)

  };

  Park.prototype.popularDino = function () {
    let mostPopular = 0;
    for (dinosaur of this.aSeriesOfDinosaurs){
      if (dinosaur.guestsAttractedPerDay >= mostPopular || dinosaur.guestsAttractedPerDay >= mostPopular.guestsAttractedPerDay){
        mostPopular = dinosaur
      }
    }

    return mostPopular
  }

  Park.prototype.findSpecies = function (species) {
    array = []
    for(dinosaur of this.aSeriesOfDinosaurs){
      if(dinosaur.species === species){
        array.push(dinosaur)
      }
    }
    return array
};

  };

  module.exports = Park;
