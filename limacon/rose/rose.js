class Rose {
  constructor(n, d, scale, detail = 720) {
    this.n = n;
    this.d = d;
    this.k = n / d;
    this.scale = scale;
    this.detail = detail;
  }
  changeNandD(n, d) {
    this.n = n;
    this.d = d;
    this.k = n / d;
  }
  render() {noFill();
    beginShape();
    for (let t = 0; t <= Math.PI * 2 * this.n * this.d; t += Math.PI / this.detail) {
      let r = Math.cos(t * this.k);
      let gimmeX = this.scale * r * Math.cos(t),
          gimmeY = this.scale * r * Math.sin(t);
      vertex(gimmeX, gimmeY);
    }
    endShape(CLOSE);
  }
}
