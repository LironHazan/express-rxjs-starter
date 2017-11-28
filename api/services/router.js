'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./animals');

router.get('/all', controller.fetchAllAnimals);

router.get('/filter', controller.filterBy);

module.exports = router;
