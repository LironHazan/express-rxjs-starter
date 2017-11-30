(() => {

  //utils
  const createNode = (element) => document.createElement(element);
  const append = (parent, element) => parent.appendChild(element);
  const getNode = (selector) => document.querySelector(selector);
  const index = 0;
  // drawers
  const paginate = () => {
    fetch('http://localhost:3000/api/animals/fetch?pageIndex='+ index)
      .then((resp) => resp.json())
      .then((data) => {
        //removeNodesFromList();
        drawAnimalsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const drawPagesMenuBtnsGroup = (pages) => {
    pages.map((page, index) => {
      const ul = getNode('.pages');
      const btn = createNode('button');
      btn.innerHTML = index+1;
      btn.onclick = paginate;
      append(ul, btn);
    });
  };
  const drawAnimalsList = (animals) => {
    const ul = getNode('.animals');
    animals.forEach((animal) => {
      const span = createNode('li');
      span.innerHTML = animal.first_name;
      append(ul, span)
    });



  };
  const removeNodesFromList = () => {
    const animals = document.querySelectorAll('.animals');
    animals.forEach((animal) => {
      animal.remove();
    });
  };
  // get info from the server
  const initPage = () => {
    return fetch('http://localhost:3000/api/animals/fetch')
      .then((resp) => resp.json())
      .then((data) => {
        drawPagesMenuBtnsGroup(data);
        drawAnimalsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  initPage();

})();