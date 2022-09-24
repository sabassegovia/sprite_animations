//gets all canvas 2d drawing methods, stores the in canvas -> ctx variable.
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//built in image class constructor
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

function animate() {
  //clears the rectangle field using our global measurements
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(50, 50, 100, 100);
  requestAnimationFrame(animate);
};
animate();
