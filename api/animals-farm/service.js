class AnimalsService {

    constructor(){

    }
    // lazy loading, client will ask for x items (limit) it will be the length of the returned array,
    simplePager(pageIndex=0, limit=10, data) {
      const deleteCount =  pageIndex*limit;
      console.log(data);
      const animals = data.reduce((acc, value, index) => {
        if(deleteCount <= index) {
          acc.push(value);
        }
        return acc;
      }, []);
      console.log(animals);
      return animals.slice(0, limit);
    }
}

module.exports = AnimalsService;
