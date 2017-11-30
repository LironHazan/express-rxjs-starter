(() => {

  //utils
  const createNode = (element) => document.createElement(element);
  const append = (parent, element) => parent.appendChild(element);
  const getNode = (selector) => document.querySelector(selector);
  // drawers
  const paginate = (event) => {
    const index = parseInt(event.currentTarget.innerHTML)-1;
    fetch('http://localhost:3000/api/animals/fetch?pageIndex='+ index)
      .then((resp) => resp.json())
      .then((data) => {
        removeNodesFromList();
        drawAnimalsList(data.members);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const drawPagesMenuBtnsGroup = (size) => {
    for(let index = 0; index < size; index++){
      const ul = getNode('.pages');
      const btn = createNode('button');
      btn.innerHTML = index+1;
      btn.onclick = paginate;
      append(ul, btn);
    }
  };

  const drawAnimalsList = (animals) => {
    const ul = getNode('.animals');
    animals.forEach((animal) => {
      const span = createNode('li');
      span.innerHTML = animal.id + ' ' + animal.first_name;
      append(ul, span)
    });


  };
  const removeNodesFromList = () => {
    const animals = document.querySelector('.animals');
    while (animals.firstChild) {
      animals.removeChild(animals.firstChild);
    }
  };

  // get info from the server
  const initPage = () => {
    return fetch('http://localhost:3000/api/animals/fetch')
      .then((resp) => resp.json())
      .then((data) => {
        drawPagesMenuBtnsGroup(data.size);
        drawAnimalsList(data.members);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  initPage();

})();