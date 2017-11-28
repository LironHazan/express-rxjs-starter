'use strict';

import animals from '../MOCK_DATA.json';

exports.fetchAllAnimals = (req, res) => {
    res.send(animals);
};

exports.filterBy = (req, res) => {
    const animals = animals; // todo: rxjs filter logic
    res.send(animals);
};
