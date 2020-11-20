// I hereby ask for you forgiveness for one shall be cursed due to one's heresy;
function whichOne(title, adress) {
  if (title == 'Selecting') {
    for (let i = 0; i < 2; i++) {
      newLink(newElement('a', 'link'), `./selecting0${i}.html`, `Selecting0${i}`, i == 0 ? 1 : 0);
    } 
  }
  if (title == 'Modifiying') {
    for (let i = 0; i < 3; i++) {
      newLink(newElement('a', 'link'), `./modifiying0${i}`, `Modifiying0${i}`, i == 0 ? 1 : 0);
    } 
  }
  if (title == 'Manipulating') {
    for (let i = 0; i < 2; i++) {
      newLink(newElement('a', 'link'), `./manipulating0${i}`, `Manipulating0${i}`, i == 0 ? 1 : 0);
    } 
  }
  if (title == 'Events') {
    for (let i = 0; i < 3; i++) {
      newLink(newElement('a', 'link'), `./events0${i}`, `Events0${i}`, i == 0 ? 1 : 0);
    } 
  }
  if (title == 'Animation') {
    for (let i = 0; i < 2; i++) {
      newLink(newElement('a', 'link'), `./html/Animation0${i}`, `Animation 0${i}`, i == 0 ? 1 : 0);
    } 
  }
  if (title == 'Plugins') {
    for (let i = 0; i < 2; i++) {
      newLink(newElement('a', 'link'), `./html/Plugins0${i}`, `Plugins 0${i}`, i == 0 ? 1 : 0);
    } 
  }
}