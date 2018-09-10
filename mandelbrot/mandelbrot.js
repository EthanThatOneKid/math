class Mandelbrot {

  constructor(s = 10, size = 1, r = 1) {
    this.size = size;
    this.s = s; // side length
    this.r = r;
    this.matrix = [];
    this.points = [];
    this.zoom = {"min": -1.5, "max": 1.5};
    this.iterations = 10;
    this.defaultInitConfig = {
      iterations: this.iterations,
      minZoom: this.size * this.zoom.min,
      maxZoom: this.size * this.zoom.max,
      allPoints: false
    };
    this.init();
  }

  init(config = this.defaultInitConfig) {
    this.matrix = [], this.points = [];
    for (let y = 0; y < this.size; y += this.size / this.s) {
      let gimmeRow = [];
      for (let x = 0; x < this.size; x += this.size / this.s) {
        let a = Mandelbrot.map(x, 0, this.size, config.minZoom, config.maxZoom);
        let b = Mandelbrot.map(y, 0, this.size, config.minZoom, config.maxZoom);
        let ca = a, cb = b, n;
        let arbitraryNumberIndicatingApproachToInfinity = 16;

        for (n = 0; n < config.iterations; n++) {
          let aa = a * a - b * b;
          let bb = 2 * a * b;
          a = aa + ca;
          b = bb + cb;
          if (a * a + b * b > arbitraryNumberIndicatingApproachToInfinity) break;
        }

        let roundResult = Math.round(Math.log(this.s));
        let isEdgePiece = n == config.iterations;
        gimmeRow.push(isEdgePiece);
        if (config.allPoints || isEdgePiece) {
          this.points.push([
            Number(x.toFixed(roundResult)) - (this.size * 0.5),
            Number(y.toFixed(roundResult)) - (this.size * 0.5),
            n / 10 // brightness from 0 to 1
          ]);
        }
      }
      this.matrix.push(gimmeRow);
    }
  }

  updateZoom(min, max) {
    this.zoom = {min, max};
    this.init();
  }

  updateIterations(iterations) {
    this.iterations = iterations;
    this.init();
  }

  log() {
    console.table(this.matrix);
  }

  static map(a, b, c, d, f, g) {
    let h = (a - b) / (c - b) * (f - d) + d;
    return g ? d < f ? constrain(h, d, f) : constrain(h, f, d) : h;
    function constrain(a, b, c) {
      if (a < b) return b;
      if (a > c) return c;
      return a;
    }
  }

}
