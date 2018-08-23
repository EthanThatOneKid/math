class Lindenmayer {

  constructor(axiom, rules) {
    this.rules = rules;
    this.generations = [axiom];
  }

  generate(epochs = 1) {
    for (let epoch of new Array(epochs)) {
      const gimmeNextGeneration = this.generations[this.generations.length - 1].split("").reduce((acc, cur) => {
        for (let rule of this.rules) cur = cur == rule[0] ? rule[1] : cur;
        acc += cur;
        return acc;
      }, "");
      this.generations.push(gimmeNextGeneration);
    }
  }

  currentGeneration() {
    return this.generations[this.generations.length - 1];
  }

}
