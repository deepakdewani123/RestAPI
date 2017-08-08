var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var imageSchema  = new Schema({
    // id : Number,
    imageName : String,
    imageURL : String,
    publishDate : { type: Date, default: Date.now },
    imageSize : String
});


// create model if not exists.
var image = mongoose.model('Image',imageSchema);
module.exports = image;