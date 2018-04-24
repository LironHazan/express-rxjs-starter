const Rx = require('rxjs');

class AnimalsService {
    constructor(data){
      this._source = data;
    }
    // lazy loading, client will ask for x items (limit) it will be the length of the returned array,
    simplePager(pageIndex=0, limit=10, data) {
      const deleteCount =  pageIndex*limit;
      const result = this._source.slice(deleteCount, deleteCount+limit);
      const obs$ = Rx.Observable.of(result);
      return obs$;
    }

    sortBy(value='age', data) {
    const source = this.animals || data;
    return source.concat().sort(value); // concat makes a copy of the array, since sort will mutate the ori
  }
}

module.exports = AnimalsService;
