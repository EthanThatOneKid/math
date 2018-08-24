
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
    this.generations = this.generations.slice(0, index);
    this.currentGeneration = this.generations[this.generations.length - 1];
  }

}

class Turtle {

  constructor(l, instructions, len = 1) {
    this.l = l;
    this.instructions = instructions;
    this.len = len;
    this.pos = instructions.init();
  }

  action() {
    this.l.generate();
    this.render();
  }

  generate(n) {
    if (n < 0) this.l.revert(this.l.generations.length + n);
    else this.l.generate(n);
  }

  render() {
    let temp = this.pos;
    for (let char of this.l.currentGeneration)
      this.pos = this.instructions[char](this.pos, this.len);
    this.pos = temp;
  }

}
