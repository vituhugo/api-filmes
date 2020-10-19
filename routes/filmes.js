var express = require('express');
var router = express.Router();
var FilmeController = require('./../controllers/FilmeController');

/* GET users listing. */
router.get('/exemplo', FilmeController.exemplo);

router.get('/', FilmeController.home)

module.exports = router;
