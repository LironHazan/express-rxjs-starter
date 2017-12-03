const Rx = require('rxjs');
// The use in rxjs in simplePager is redundant, could be resolved to 1 line: return this._source.slice(deleteCount, deleteCount+limit);

class AnimalsService {
    constructor(data){
      this._source = data;
    }
    // lazy loading, client will ask for x items (limit) it will be the length of the returned array,
    simplePager(pageIndex=0, limit=10, data) {
      const deleteCount =  pageIndex*limit;
      //const result = this._source.slice(deleteCount, deleteCount+limit);
      //console.log(result);
      const source$ = Rx.Observable.from(this._source || data) // make an observable of the array
      .reduce((acc, value, index) => {
        if(deleteCount <= index) { // neglect all that smaller than the selected page
          acc.push(value);
        }
        return acc;
      }, []);

    const observer = {
      next: i => {console.log(JSON.stringify(i))},
      error: err => {console.log(err)},
      complete: () => {}
    };

    source$.subscribe(observer);
    return source$.toPromise();

    }

    sortBy(value='age', data) {
    const source = this.animals || data;
    return source.concat().sort(value); // concat makes a copy of the array, since sort will mutate the ori
  }
}

module.exports = AnimalsService;
