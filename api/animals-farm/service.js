class AnimalsService {

    constructor(){

    }
    // lazy loading, client will ask for x items (limit) it will be the length of the returned array,

    simplePager(pageIndex=0, limit=10, data){
        const startCountIndex =  pageIndex*limit; //default 0
        return data.slice(startCountIndex, limit);
    }
}
module.exports = AnimalsService;
