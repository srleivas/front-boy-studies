gameScreen();

// {/* <div class="gameGlass">
//   <p class="gameGlassH2">Game Start!</p>
//   <p class="gameGlassP">Press Space</p>
// </div> */}

function gameScreen() {

  const flappyDiv = document.querySelector('[wm-flappy]');
  const gameGlassMain = newElement('div', 'gameGlass');
  flappyDiv.appendChild(gameGlassMain);
  
  const gameGlassDiv = document.querySelector('.gameGlass');

  const p1 = newElement('p', 'gameGlassH2');
  const textP1 = document.createTextNode('Game Start!');
  p1.appendChild(textP1);
  gameGlassDiv.appendChild(p1);

  const p2 = newElement('p', 'gameGlassP');
  const textp2 = document.createTextNode('Press Space');
  p2.appendChild(textp2);
  gameGlassDiv.appendChild(p2);
  
  
  const gameGlassP = document.querySelector('.gameGlassP');
  const gameGlass = document.querySelector('.gameGlass');

  
  setInterval(() => {
    gameGlassP.style.display = (gameGlassP.style.display == 'none' ? '' : 'none');
  }, 650);

  // Start Screen ~~
  window.addEventListener('keyup', gameStartSpace);
  window.addEventListener('click', gameStartClick);

  function gameStartClick() {
    removeStartListener();
    gameGlass.style.display = 'none';
    new FlappyTan().start();
  }

  function gameStartSpace(event) {
    if (event.code === 'Space') {
      removeStartListener();
      gameGlass.style.display = 'none';
      new FlappyTan().start();
    }
  }

  function removeStartListener() {
    this.removeEventListener('click', gameStartClick);
    this.removeEventListener('keyup', gameStartSpace);
  }
}

function gimmeScore(score) {
  this.scoreLog = score;
  console.log(scoreLog);
  return scoreLog;
}

function defeatScreen() {
  const gameGlassDiv = document.querySelector('.gameGlass');
  const DefeatPara = newElement('p', 'gameGlassH2');
  const lostMessage = document.createTextNode('The Game');

  const scoreP = newElement('p', 'gameGlassP');
  const scoreLogMsg = document.createTextNode(`Score: ${scoreLog}`);
  
  gameGlassDiv.style.display = '';
  gameGlassDiv.innerHTML = '';
  
  DefeatPara.appendChild(lostMessage);
  gameGlassDiv.appendChild(DefeatPara);

  scoreP.appendChild(scoreLogMsg);
  gameGlassDiv.appendChild(scoreP);
}