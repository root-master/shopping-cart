var Flower = require('../models/flower');

var mongoose = require('mongoose');

// connect to mongo function
  mongoose.Promise = global.Promise;
  mongoose.connect('localhost:27017/flowers');



var Flowers = [
  new Flower({
  image1Path: './img/Jah1.jpg',
  image2Path: './img/Jah2.jpg',
  title: 'Jah Cookies',
  type: 'Sativa', // Sativa, Hybrid or Indica
  shortDescription: 'Creative',
  longDescription: 'The award-winning',
  eighthPrice: 60,
  fourthPrice: 120,
  THC: 17.5,
  CBD: 0.01
}),
  new Flower({
  image1Path: './img/Jah1.jpg',
  image2Path: './img/Jah2.jpg',
  title: 'Papaya',
  type: 'Indica', // Sativa, Hybrid or Indica
  shortDescription: 'Energetic',
  longDescription: 'The award-winning',
  eighthPrice: 70,
  fourthPrice: 140,
  THC: 14.5,
  CBD: 0.01
})];

var done = 0;
for(var i = 0; i < Flowers.length; i++) {
  Flowers[i].save(function(error,result){
    done++;
    if(done === Flowers.length) {
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
