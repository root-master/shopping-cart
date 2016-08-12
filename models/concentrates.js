var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  image1Path: {type: String, required:true},
  image2Path: {type: String, required:true},
  title: {type: String, required: true},
  type: {type: String, required:true}, // Sativa, Hybrid or Indica
  shortDescription: {type: String},
  longDescription: {type: String},
  halfGramPrice: {type: Number, required: true},
  fullGramPrice: {type: Number, required: true},
  THC: {type: Number, required: true},
  CBD: {type: Number, required: true}
});

module.exports = mongoose.model('Concentrates', schema);
