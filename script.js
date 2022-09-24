//gets all canvas 2d drawing methods, stores the in canvas -> ctx variable.
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//built in image class constructor
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
//to slow down animateion, staggerframe controls the frame speed
let gameFrame = 0;
let staggerFrame = 5;

const spriteAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'jump',
    frames: 7
  },
  {
    name: 'fall',
    frames: 7
  },
  {
    name: 'run',
    frames: 9
  },
  {
    name: 'dizzy',
    frames: 11
  },
  {
    name: 'sit',
    frames: 5
  },
  {
    name: 'roll',
    frames: 7
  },
  {
    name: 'bite',
    frames: 7
  },
  {
    name: 'ko',
    frames: 12
  },
  {
    name: 'getHit',
    frames: 4
  },
]
animationStates.forEach((state, idx) => {
  let frames = {
    loc: [],
  }
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = idx * spriteHeight;
    frames.loc.push({x: positionX, y: positionY})
  }
  spriteAnimations[state.name] = frames
})


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame / staggerFrame) % spriteAnimations['sit'].loc.length; //goes to next sprite only if mod 6
  let frameX = spriteWidth * position; //cycles betwen 0and the number from above;
  let frameY = spriteAnimations['sit'].loc[position].y
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
