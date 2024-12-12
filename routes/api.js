var express = require('express');
var apiRouter = express.Router();

apiRouter.get('/', function(req,res,next) {
    res.send(`Welcome to my router`);
});

module.exports = apiRouter;