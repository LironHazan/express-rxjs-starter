export class AnimalsService {

    constructor(){

    }
    // lazy loading, client will ask for x items (limit) it will be the length of the returned array,

    simplePager(pageIndex=0, limit=10, data){
        const startCount =  data[pageIndex*limit]; //default 0
        const animals = data.slice(startCount, limit);
        return animals;
    }
}
