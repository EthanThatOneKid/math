class PrimesCircle {
  constructor(radius, perimeter = 10) {
    this.radius = radius;
    this.perimeter = perimeter;
  }
  changePerimeter(perimeter) {
    this.perimeter = perimeter;
  }
  render() {
    let primesLocations = [];
    let prev;
    let cur = 0;
    for (let t = 0; t <= Math.PI * 2 + 0.01; t += Math.PI * 2 / this.perimeter) {
      let r = this.offset + Math.cos(t);
      let gimmeX = this.radius * Math.cos(t),
          gimmeY = this.radius * Math.sin(t);
      if (PrimesCircle.isPrime(cur)) {
        primesLocations.push([gimmeX, gimmeY]);
      }
      fill(0);
      if (PrimesCircle.isPrime(cur)) fill(255,0,0);
      if (t < Math.PI * 2)
        text(cur, 1.2 * this.radius * Math.cos(t), 1.2 * this.radius * Math.sin(t));
      if (prev)
        line(prev.x, prev.y, gimmeX, gimmeY);
      cur++;
      prev = {x: gimmeX, y: gimmeY};
    }
    for (let i = 0; i < primesLocations.length; i++) {
      for (let j = i + 1; j < primesLocations.length; j++) {
        line(
          primesLocations[i][0], primesLocations[i][1],
          primesLocations[j][0], primesLocations[j][1]
        );
      }
    }
  }
  static isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i == 0) return false;
    return n != 1;
  }
}
