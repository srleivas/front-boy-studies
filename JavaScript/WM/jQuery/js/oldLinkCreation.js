const container = document.querySelector('.container');
const link = document.querySelectorAll('[linkN]');

function log(...args) {
  return console.log(...args);
}

link.forEach(link => {
  link.onclick = a => {
    a.preventDefault();
    whichOne(link.innerHTML, link.getAttribute('LinkN'));
  }
});

function newElement(element, cssClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(cssClass);
  return newElement;
}

function newLink(element, href, title, clean = 1) {
  clean ? container.innerHTML = "" : '';
  element.setAttribute('href', href);
  element.innerHTML = title;
  $(element).hide().appendTo(container).fadeIn(500)
}

// I hereby ask you forgiveness, one shall be cursed due to one's heresy;
function whichOne (title, n) {
  for (let i = 0; i < n; i++) {
    newLink(newElement('a', 'link'), `./${title}0${i}.html`, `${title} 0${i}`, i == 0 ? 1 : 0);
  }
}