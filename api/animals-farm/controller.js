'use strict';
const AnimalsService = require('./service');
const animals = require('../MOCK_DATA.json');

const pageLimit = 100;

// http://localhost:3000/api/animals/fetch
exports.fetchAllAnimals = (req, res) => {
    const service = new AnimalsService();
    const size = animals.length / pageLimit;
    service.simplePager(req.query.pageIndex, pageLimit, animals)
      .then(members => {
      res.send({members: members.slice(0, pageLimit), size});
      }).catch(err => {console.log(err)});
};

exports.filterBy = (req, res) => {
    const animals = animals; // todo: rxjs filter logic
    res.send(animals);
};
