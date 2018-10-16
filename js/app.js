const { ScrollSpy, Dropdown } = M;
const scrollSpyElements = document.querySelectorAll('.scrollspy');
const cardContentElements = document.querySelectorAll('.card-content');

const equalizeHeights = (nodeList) => { 
  const maxHeight = [...nodeList]
    .map(({ clientHeight }) => clientHeight)
    .sort((heightA, heightB) => heightB - heightA)[0]

  nodeList.forEach(element => {
    element.style.minHeight = `${maxHeight}px`;
  })
}

ScrollSpy.init(scrollSpyElements, { scrollOffset: (window.innerWidth < '601' ? 56 : 64) });

Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
  aligment: 'right', coverTrigger: false, constrainWidth: false,
});

equalizeHeights(cardContentElements);

window.addEventListener('resize', () => {
  ScrollSpy.init(scrollSpyElements, { scrollOffset: (window.innerWidth < '601' ? 56 : 64) });
  equalizeHeights(cardContentElements);
});
