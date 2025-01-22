export class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 30;
    this.direction = 1;
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x += this.direction * 2;
  }

  moveDown() {
    this.y += 30;
  }
}
