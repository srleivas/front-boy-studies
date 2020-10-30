const birdyImg = preloadImage('http://www.pngmart.com/files/12/Flappy-Bird-PNG-Photos.png');

function newElement(tagName, className) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  return element;
}

// Create pipe couple itself | normal and reverse version of it
function Pipe(reverse = false) {
  this.element = newElement('div', 'pipe');

  const border = newElement('div', 'border');
  const body = newElement('div', 'body');
  this.element.appendChild(reverse ? body : border);
  this.element.appendChild(reverse ? border : body);

  this.setHeight = height => body.style.height = `${height}px`;
}

// const b = new Pipe(true);
// b.setHeight(300);
// document.querySelector('[wm-flappy]').appendChild(b.element)

// Create the couple Pipe and position it 
function DoublePipe(height, opening, x) {
  this.element = newElement('div', 'double-pipe');

  this.top = new Pipe(true);
  this.bottom = new Pipe(false);

  this.element.appendChild(this.top.element);
  this.element.appendChild(this.bottom.element);

  this.randomOpening = () => {
    const topHeight = Math.random() * (height - opening);
    const bottomHeight = height - opening - topHeight;
    this.top.setHeight(topHeight);
    this.bottom.setHeight(bottomHeight);
  }

  this.getX = () => parseInt(this.element.style.left.split('px')[0]);
  this.setX = x => this.element.style.left = `${x}px`;
  this.getWidth = () => this.element.clientWidth;

  this.randomOpening();
  this.setX(x);
}

// const b = new DoublePipe(700, 200, 40)
// document.querySelector('[wm-flappy]').appendChild(b.element);

// Create the pipes that'll be reused throughly and set the animations for pipes
function PipePlural(height, width, opening, spaceBtw, scoreUp) {
  this.coupleS = [
    new DoublePipe(height, opening, width),
    new DoublePipe(height, opening, width + spaceBtw),
    new DoublePipe(height, opening, width + spaceBtw * 2),
    new DoublePipe(height, opening, width + spaceBtw * 3)
  ]

  this.animate = (movement = 3) => {
    this.coupleS.forEach(couple => {
      couple.setX(couple.getX() - movement);

      if (couple.getX() < -couple.getWidth()) {
        couple.setX(couple.getX() + spaceBtw * this.coupleS.length);
        couple.randomOpening();
      }

      const middle = width / 2;
      const gotToMiddle = couple.getX() + movement >= middle
        && couple.getX() < middle
      if (gotToMiddle) scoreUp();

    });
  }
}


function preloadImage(url) {
  let img = new Image();
  img.src = url
  return img.src;
}

// Control flappyTan, set flying state, place img and animate it;
function Birdy(gameHeight) {
  let flying = false;

  this.element = newElement('img', 'birdy');
  this.element.src = birdyImg;
  // this.element.src = 'http://www.pngmart.com/files/12/Flappy-Bird-PNG-Photos.png'

  this.getY = () => parseInt(this.element.style.bottom.split('px')[0]);
  this.setY = y => this.element.style.bottom = `${y}px`;

  window.onkeydown = e => flying = true;
  window.onkeyup = e => flying = false;
  // "Phone" ~~ you won't want to play on phone thg
  window.ontouchstart = e => flying = true;
  window.ontouchend = e => flying = false;
  // Ever heard of rat?
  window.onmousedown = e => flying = true;
  window.onmouseup = e => flying = false;

  this.animate = () => {
    const newY = this.getY() + (flying ? 6 : -5);
    const maxHeight = gameHeight - this.element.clientHeight;

    if (newY <= 0) {
      this.setY(0);
    }
    else if (newY >= maxHeight) {
      this.setY(maxHeight);
    }
    else {
      this.setY(newY);
    }
  }
  this.setY(gameHeight / 2);
}

function Progress() {
  this.element = newElement('span', 'progress');
  this.updateScore = score => {
    this.element.innerHTML = score + 1;
    gimmeScore(score + 1);
  }
  this.updateScore(-1);
}

// =============================================== Test Area ================================================= //
// const pipes = new PipePlural(700, 1200, 200, 400)
// const bird = new Birdy(700);
// const gameArea = document.querySelector('[wm-flappy]');

// gameArea.appendChild(bird.element);
// gameArea.appendChild(new Progress().element);
// pipes.coupleS.forEach(couple => gameArea.appendChild(couple.element));
// setInterval(() => {
//   pipes.animate();
//   bird.animate();
// }, 20);

function hasOverwritten(elementA, elementB) {
  const a = elementA.getBoundingClientRect();
  const b = elementB.getBoundingClientRect();

  const horizontal = a.left + a.width >= b.left
    && b.left + b.width >= a.left;
  const vertical = a.top + a.height >= b.top
    && b.top + b.height >= a.top;
  return horizontal && vertical;
}

function hasCollided(birdy, pipes) {
  let collided = false;
  pipes.coupleS.forEach(couple => {
    if (!collided) {
      const top = couple.top.element;
      const bottom = couple.bottom.element;
      collided = hasOverwritten(birdy.element, top)
        || hasOverwritten(birdy.element, bottom);
    }
  });
  return collided;
}

function FlappyTan() {
  let score = 0;

  const gameArea = document.querySelector('[wm-flappy]');
  const height = gameArea.clientHeight;
  const width = gameArea.clientWidth;

  const progress = new Progress();
  const pipe = new PipePlural(height, width, 200, 400, () => {
    progress.updateScore(score++);
  });
  const birdy = new Birdy(height);

  gameArea.appendChild(progress.element);
  gameArea.appendChild(birdy.element);
  pipe.coupleS.forEach(couple => {
    gameArea.appendChild(couple.element)
  });

  this.start = () => {
    const timer = setInterval(() => {
      pipe.animate();
      birdy.animate();

      if (hasCollided(birdy, pipe)) {
        clearInterval(timer);
        defeatScreen();
        setTimeout (() => {
          gameArea.innerHTML = '';
          gameScreen();
        }, 1800);
      } 
    }, 18)
  }
}