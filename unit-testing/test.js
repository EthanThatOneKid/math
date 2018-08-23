class Test {
  constructor(desc, fn) {
    this.desc = desc;
    this.ans;

    let beg, end;
    (() => {
      beg = new Date().valueOf();
      this.ans = fn();
      end = new Date().valueOf();
    })();
    this.elapsed = end - beg;
  }
  expect(gimmeAns) {
    return {
      "correct": gimmeAns === this.ans,
      "description": this.desc,
      "answer": gimmeAns,
      "response": this.ans,
      "elapsed": this.elapsed
    };
  }
}
