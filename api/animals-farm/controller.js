'use strict';
const AnimalsService = require('./service');
const animals = require('../MOCK_DATA.json');
const pageLimit = 10;
// http://localhost:3000/api/animals/fetch
exports.fetchAllAnimals = (req, res) => {
    const service = new AnimalsService();
    const result = service.simplePager(req.query.pageIndex, pageLimit, animals);
    res.send(result);
};

exports.filterBy = (req, res) => {
    const animals = animals; // todo: rxjs filter logic
    res.send(animals);
};
