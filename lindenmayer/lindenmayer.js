
// https://en.wikipedia.org/wiki/L-system

class Lindenmayer {

  constructor(axiom, rules) {
    this.rules = rules;
    this.generations = [axiom];
    this.currentGeneration = axiom;
  }

  generate(epochs = 1) {
    for (let epoch of new Array(epochs)) {
      const gimmeNextGeneration = this.generations[this.generations.length - 1].split("").reduce((acc, cur) => {
        for (let rule of this.rules) cur = cur == rule[0] ? rule[1] : cur;
        acc += cur;
        return acc;
      }, "");
      this.generations.push(gimmeNextGeneration);
      this.currentGeneration = this.generations[this.generations.length - 1];
    }
  }

  revert(index = this.generations.length - 1) {
    if (index < 0) return;
    this.generations = this.generations.slice(0, index);
    this.currentGeneration = this.generations[this.generations.length - 1];
  }

}

class Turtle {

  constructor(l, instructions, len = 2, decay = 1) {
    this.l = l;
    this.instructions = instructions;
    this.len = len;
    this.pos = instructions.init();
    this.decay = decay;
  }

  action() {
    this.l.generate();
    this.render();
  }

  generate(n) {
    if (n < 0) {
      this.l.revert(this.l.generations.length + n);
      this.len /= this.decay;
    } else {
      this.l.generate(n);
      this.len *= this.decay;
    }
  }

  render() {
    let temp_pos = this.pos, temp_len = this.len;
    for (let char of this.l.currentGeneration)
      this.pos = this.instructions[char](this.pos, this.len);
      if (this.pos.len) this.len = this.pos.len;
    this.pos = temp_pos;
    this.len = temp_len;
  }

}
