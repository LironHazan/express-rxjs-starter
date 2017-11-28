'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

router.get('/fetch', controller.fetchAllAnimals);

router.get('/filter', controller.filterBy);

module.exports = router;
