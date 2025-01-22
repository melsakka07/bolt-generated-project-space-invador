export class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = 50;
    this.height = 30;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 10;
    this.speed = 5;
    this.bullets = [];
  }

  draw(ctx) {
    ctx.fillStyle = 'lime';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
    this.bullets.forEach(bullet => {
      ctx.fillStyle = 'white';
      ctx.fillRect(bullet.x, bullet.y, 3, 15);
    });
  }

  move(direction) {
    if (direction === 'left' && this.x > 0) {
      this.x -= this.speed;
    }
    if (direction === 'right' && this.x < this.canvas.width - this.width) {
      this.x += this.speed;
    }
  }

  shoot() {
    this.bullets.push({
      x: this.x + this.width / 2,
      y: this.y
    });
  }

  update() {
    this.bullets = this.bullets.filter(bullet => {
      bullet.y -= 7;
      return bullet.y > 0;
    });
  }
}
