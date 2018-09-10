class Turtle {

  constructor(l, instructions, len = 2, decay = 1) {
    this.l = l;
    this.instructions = instructions;
    this.len = len;
    this.pos = instructions.init();
    this.decay = decay;
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
    for (let char of this.l.currentGeneration) {
      temp_pos = this.instructions[char](temp_pos, temp_len);
      if (temp_pos.len) temp_len = temp_pos.len;
    }
  }

}
