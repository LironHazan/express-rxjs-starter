'use strict';
const AnimalsService = require('./service');
const animals = require('../MOCK_DATA.json');
const pageLimit = 25;
// http://localhost:3000/api/animals/fetch
exports.fetchAllAnimals = (req, res) => {
    const service = new AnimalsService();
    const size = animals.length / pageLimit;
    const members = service.simplePager(req.query.pageIndex, pageLimit, animals);
    res.send({members, size});
};

exports.filterBy = (req, res) => {
    const animals = animals; // todo: rxjs filter logic
    res.send(animals);
};
