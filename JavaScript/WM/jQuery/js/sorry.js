// I hereby ask for you forgiveness for one shall be cursed due to one's heresy;
function whichOne (title, n) {
  for (let i = 0; i < n; i++) {
    newLink(newElement('a', 'link'), `./${title}0${i}.html`, `${title} 0${i}`, i == 0 ? 1 : 0);
  }
}