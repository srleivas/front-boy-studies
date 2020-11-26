const $ = require('./ExternalJs/jquery.min.js')
const linkCustomAttr = $('[menuLink]');
const data = require('../data/links');
const container = $('.container');

linkCustomAttr.click(event => {
  event.preventDefault()
  generateContentLinks(event.target.innerHTML.toLowerCase());
});

function generateContentLinks(rootLink) {
  const keyLinks = Object.values(data.links[rootLink]);
  const keyTitles = Object.keys(data.links[rootLink]);

  keyLinks.forEach((key, index) => {
    if (index == 0) container.html('');
    $('<a>').html(keyTitles[index]).addClass('link container')
      .attr('href', `../html/${key}`).hide().fadeIn(500)
        .appendTo(container);
  });
}
