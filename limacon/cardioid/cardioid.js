class Cardioid {
  constructor(offset = 0.5, scale = 75, detail = 1) {
    this.offset = offset;
    this.scale = scale;
    this.detail = detail;
  }
  changeOffset(offset) {
    this.offset = offset;
  }
  render() {
    let prev;
    for (let t = 0; t < Math.PI * 2; t += 0.01745 / this.detail) {
      let r = this.offset + Math.cos(t);
      let gimmeX = this.scale * r * Math.cos(t),
          gimmeY = this.scale * r * Math.sin(t);
      if (prev) line(prev.x, prev.y, gimmeX, gimmeY);
      prev = {x: gimmeX, y: gimmeY};
    }
  }
}
