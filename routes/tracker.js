var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.set('Content-Type', 'image/gif');
    res.set('Connection', 'close');
    res.send(new Buffer.from('R0lGODdhAQABAIAAAP///////ywAAAAAAQABAAACAkQBADs=','base64'));
});

module.exports = router;
