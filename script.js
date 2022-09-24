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
let frameX = 0;
let frameY = 0;
//to slow down animateion, staggerframe controls the frame speed
let gameFrame = 0;
let staggerFrame = 5


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //image: the image we are spriting over
  //sx/sy: use traversing the source image by column/row
  //sw/sh: use selecting how much from the photo to crop out
  //dx/dy: starting point to grab the image from
  //dw/dh: how much of the image to grab in relation to the dx/dy
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  if (gameFrame % staggerFrame === 0) {
    if (frameX < 6) frameX++;
    else frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
