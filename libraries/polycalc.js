// +---------------+
// |   PolyCalc    |
// +---------------+
//   \_ by EthanThatOneKid

class Polynomial {

  constructor(poly) {
    this.constants = typeof poly == "object" ? poly :
      typeof poly == "string" && poly.length > 0 ? poly.split(",").reduce((acc, cur) => acc.concat(Number(cur)), []) : [];
    this.len = this.constants.length;
    this.solutions = this.solveForRationalZeros();
  }

  solveForY(x) {
    if (x == 0) return this.solutions;
    return this.constants.reduce((acc, cur, i) => acc += cur * Math.pow(x, this.len - i - 1), 0);
  }

  solveForRationalZeros() {
    let zeros = [], qs = Polynomial.getFactorsOf(this.constants[0]);
    for (let p of Polynomial.getFactorsOf(this.constants[this.constants.length - 1])) {
      for (let q of qs) {
        for (let i = -1; i <= 1; i += 2) {
          let pOverQ = p / q * i;
          if (this.solveForY(pOverQ) == 0) zeros.push(pOverQ);
        }
      }
    }
    return zeros;
  }

  stringify() {
    return this.constants.reduce((acc, cur, i) => {
      let sign = cur >= 0 ? "+" : "-";
      let constant = Math.abs(cur);
      let power = this.len - i - 1;
      return acc += `${sign}${constant}x^${power}`;
    }, "");
  }

  add(n) {
    this.constants = [n].concat(this.constants);
  }

  log() {
    console.log(this.stringify());
  }

  htmlify() {
    return Polynomial.htmlify(this.stringify());
  }

  static getFactorsOf(n, includeNegatives = false) {
    if (typeof n != "number" || n == 0) return [];
    n = Math.abs(n);
    let arr = [n], range = Math.ceil(n * 0.5);
    for (let i = range; i >= 1; i--) if (n % i == 0) arr.push(i);
    return includeNegatives ? arr.reduce((acc, cur) => acc.concat(cur * -1), arr) : arr;
  }

  static htmlify(str) {
    let waitingForNonDigit = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "^") {
        //str = str.substring(0, i) + "<sup>" + str.substring(i);
        console.log(str = str.substring(0, i - 1) + "<sup>" + str.substring(i))
        waitingForNonDigit = true;
      } //else if (waitingForNonDigit && ![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(str[i]))) {
      //  str = str.substring(0, i) + "</sup>" + str.substring(i);
      //  waitingForNonDigit = false;
      //}
    }
    /*
    str = str.replace("+", "&plus;");
    str = str.replace("-", "&minus;");
    str = str.replace("/", "&divide;");
    str = str.replace("*", "&times;");
    */
    return str;
  }
}
