/*
  +---------------+
  |   Than.js     |
  +---------------+
    \_ By EthanThatOneKid
*/

class Than {

  constructor(config) {
    this.type = config.type || undefined;
    this.data = config.data || {};
    this.radians = config.radians || false;
  }

  add(input) {
    if (Array.isArray(input))
      input.forEach(than => this.add(than));
    else if (input instanceof Than) {

      const theta1 = !this.radians ? Than.radians(this.data.theta) : this.data.theta,
            theta2 = !input.radians ? Than.radians(input.data.theta) : input.data.theta;

      const coord1 = Than.cartesian({theta: theta1, magnitude: this.data.magnitude}),
            coord2 = Than.cartesian({theta: theta2, magnitude: input.data.magnitude});

      const x = coord1.x + coord2.x,
            y = coord1.y + coord2.y;

      if (this.type == "polar") {

        const polar = Than.polar({x, y});
        if (!this.radians)
          polar.theta = Than.degrees(polar.theta);
        this.data = polar;
        return this.copy();

      } else if (this.type == "cartesian") {

        this.data = {x, y};
        return this.copy();

      }
    }
  }

  copy() {
    return new Than({
      type: this.type,
      data: this.data
    });
  }

  log() {
    console.log(this);
  }

  // Conversion Functions:

  static cartesian(coords) {
    return {
      x: coords.magnitude * Math.cos(coords.theta),
      y: coords.magnitude * Math.sin(coords.theta)
    };
  }

  static polar(coords) {
    return {
      theta: Math.atan(coords.y / coords.x),
      magnitude: Math.sqrt((coords.x * coords.x) + (coords.y * coords.y))
    };
  }

  static radians(degrees) {
    return degrees * Math.PI / 180;
  }

  static degrees(radians) {
    return radians * 180 / Math.PI;
  }
}
