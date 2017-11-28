'use strict';
import {AnimalsService} from './service';
import animals from '../MOCK_DATA.json';

exports.fetchAllAnimals = (req, res) => {
    const service = new AnimalsService();
    service.simplePager(req.limit, req.pageIndex, animals);
    res.send();
};

exports.filterBy = (req, res) => {
    const animals = animals; // todo: rxjs filter logic
    res.send(animals);
};
