const Rx = require('rxjs');

class AnimalsService {
    constructor(){

    }
    // lazy loading, client will ask for x items (limit) it will be the length of the returned array,
    simplePager(pageIndex=0, limit=10, data) {
      const deleteCount =  pageIndex*limit;

      const source$ = Rx.Observable.from(data)
      .reduce((acc, value, index) => {
        if(deleteCount <= index) {
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

      // console.log(data);
      // const animals = data.reduce((acc, value, index) => {
      //   if(deleteCount <= index) {
      //     acc.push(value);
      //   }
      //   return acc;
      // }, []);
      // console.log(animals);
      // return animals.slice(0, limit);
    }
}

module.exports = AnimalsService;
