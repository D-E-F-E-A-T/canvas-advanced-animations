const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var gravity =  0.10;

const ball = {
  x: 200,
  y: 30,
  vx: 0,
  vy: 2,
  radius: 25,
  color: '#2e7d32',
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

ball.draw();

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy *= -1;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx *= -1;
  }
};

document.getElementById("faster").onclick = () => {
  ball.vx *= 1.1;
};

document.getElementById("slower").onclick = () => {
  ball.vx *= 0.9;
};

const intervalId = setInterval(update, 20);

const hitBottom = () => {
  const rockbottom = canvas.height - ball.radius;
  if (ball.y > rockbottom) {
    ball.y = rockbottom;
    clearInterval(intervalId);
  }
};

document.onkeydown = (e) => {
  if(e.keyCode === 32) {
    ball.userPull = 0.3;
  }           
};

document.onkeyup = (e) => {
  if (e.keyCode === 32) {
    ball.userPull = 0;
  }
};
