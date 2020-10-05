var express = require('express');
var router = express.Router();
var FilmeController = require('./../controllers/FilmeController');

/* GET users listing. */
router.get('/', FilmeController.index);

module.exports = router;
