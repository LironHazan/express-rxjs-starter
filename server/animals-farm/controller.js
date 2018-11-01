'use strict';
const AnimalsService = require('./service');
const animals = require('../MOCK_DATA.json');

const pageLimit = 100;

exports.fetchAllAnimals = (req, res) => {
    const service = new AnimalsService(animals);
    const size = animals.length / pageLimit;
    service.simplePager(req.query.pageIndex, pageLimit)
      .subscribe(members => {
      res.send({members, size});
      }, err => {console.log(err)});
};

exports.sortBy = (req, res) => {
  const service = new AnimalsService(animals);
  const sorted = service.sortBy(req.value);
  res.send(sorted);
};
