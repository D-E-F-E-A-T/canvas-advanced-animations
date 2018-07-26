const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ball = {
  x: 100,
  y: 100,
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
  ctx.clearRect(0,0, canvas.width, canvas.height);
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

document.getElementById("faster").onclick = function(){
  ball.vx *= 1.1;
};

document.getElementById("slower").onclick = function(){
  ball.vx *= 0.9;
};

setInterval(update, 20);
