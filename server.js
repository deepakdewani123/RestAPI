// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var images = require('./routes/images');

var Image = require('./models/image');

// var mongoose = require('mongoose');

// var routes = require("./app/routes");
// var db	 = require('./config/db');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/images', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/images')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        
        // create a new instance of the Image model
        var image = new Image();
        image.id = 123;  // set the bears name (comes from the request)
        image.imageName = req.body.name;
        image.imageURL = "example";
        image.imageSize = "100*100";

        // save the bear and check for errors
        image.save(function(err) {
            if (err) {
                res.send(err);
                res.json({ message: 'error!' });
            }
            else {
                res.json({ message: 'Image created!' });
            }
                

            
        });

    })
    .get(function(req, res) {
        // res.json({ message: 'hooray! welcome to our apisss!' });

        Image.find(function(err, images) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(images);
            }
        });   
    });

    router.route('/images/:imageName')

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Image.remove({
            imageName: req.params.imageName
        }, function(err, bear) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ message: 'Successfully deleted' });
            }
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/hare-krishna', router);



// app.get('/images', images.findAll);
// app.get('/images/:id', images.findById);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
