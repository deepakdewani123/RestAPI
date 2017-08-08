var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var audioSchema  = new Schema({
    _id : String,
    audioName : String,
    audioURL : String,
    publishDate : { type: Date, default: Date.now },
    audioSize : Number
});


// create model if not exists.
var audios = mongoose.model('audios',audioSchema);
module.exports = audios;