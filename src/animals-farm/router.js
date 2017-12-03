'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/fetch', controller.fetchAllAnimals);
router.get('/fetch/:pageIndex', controller.fetchAllAnimals);

router.get('/sort', controller.sortBy);
router.get('/sort/:value', controller.sortBy);

module.exports = router;
