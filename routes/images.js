// var Image = require('./models/image')
var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/local';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoURI);
});
db.once('open', function() {
  // we're connected!
  console.log("we're connected!");
});

// exports.findAll = function(req, res) {
//     res.send([{name:'image'}, {name:'image'}, {name:'image'}]);
// };

// exports.findById = function(req, res) {
//     res.send({id:req.params.id, name: "The Name", description: "description"});
// };

// var populateDB = function() {
//     var image = new Image({
//     _id : 123,
//     imageName : "test",
//     imageURL : "abcd",
//     imageSize : "100*100"
//     })
// }
