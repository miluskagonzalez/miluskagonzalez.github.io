const { ScrollSpy, Dropdown } = M;

Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
  aligment: 'right', coverTrigger: false, constrainWidth: false,
});

const scrollSpyElements = document.querySelectorAll('.scrollspy');

ScrollSpy.init(scrollSpyElements, { scrollOffset: (window.innerWidth < '601' ? 56 : 65) });

window.addEventListener('resize', () => {
  ScrollSpy.init(scrollSpyElements, { scrollOffset: (window.innerWidth < '601' ? 56 : 65) })
});
