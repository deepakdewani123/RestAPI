var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema  = new Schema({
    _id : String,
    eventName : String,
    eventURL : String,
    publishDate : { type: Date, default: Date.now }
});


// create model if not exists.
var events = mongoose.model('events',eventSchema);
module.exports = events;