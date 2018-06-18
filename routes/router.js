var express = require('express');

var book = require('../controls/book');
var order = require('../controls/order');
var jingyantie = require('../controls/jingyantie');
var api = require('../api');

var router = express.Router();

// book

router.post(api.bookSearch, book.bookSearch);
router.post(api.bookType, book.typeSearch);
router.post(api.bookDetail, book.bookDetail);
router.post(api.bookSeel,book.bookSeel);

// order

router.post(api.orderAdd, order.orderAdd);


// jingyantieList

router.post(api.jingyantieList, jingyantie.jingyantieList);
















module.exports = router;
