// +---------------+
// |   PolyCalc    |
// +---------------+
//   \_ by EthanThatOneKid
//    \_ Built-In Methods:
//      \_ .solveForY(x)
//      \_ .solveForRationalZeros()
//      \_ .stringify()
//      \_ .hmtlify()
//      \_ .xFactor()
//      \_ .getQuadraticSolution()
//      \_ .combine(Polynomial)

class Polynomial {

  constructor(poly) {
    this.constants = typeof poly == "object" ? poly :
      typeof poly == "string" && poly.length > 0 ? poly.split(",").reduce((acc, cur) => acc.concat(Number(cur)), []) : [];
    this.len = this.constants.length;
    this.solutions = this.solveForRationalZeros();
  }

  solveForY(x) {
    return this.constants.reduce((acc, cur, i) => acc += cur * Math.pow(x, this.len - i - 1), 0);
  }

  solveForRationalZeros() {
    let zeros = new Set(), qs = Polynomial.getFactorsOf(this.constants[0]);
    for (let p of Polynomial.getFactorsOf(this.constants[this.constants.length - 1])) {
      for (let q of qs) {
        for (let i = -1; i <= 1; i += 2) {
          let pOverQ = p / q * i;
          if (this.solveForY(pOverQ) == 0) zeros.add(pOverQ);
        }
      }
    }
    return zeros.size > 0 ? [...zeros] : "irrational";
  }

  stringify() {
    return this.constants.reduce((acc, cur, i) => {
      let sign = cur < 0 ? "-" : i > 0 ? "+" : "";
      let power = this.len - i - 1;
      let constant = Math.abs(cur) != 1 ||  power <= 1 ? Math.abs(cur) : "";
      let xPower = power > 1 ? "x^" + power : power == 1 ? "x" : "";
      return acc += `${sign}${constant}${xPower}`;
    }, "");
  }

  log() {
    console.log(this.stringify());
  }

  htmlify() {
    return Polynomial.htmlify(this.stringify());
  }

  combine(poly) {
    let a = poly.constants.reverse(), b = this.constants.reverse(), result = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++)
      result.push((a[i] || 0) + (b[i] || 0));
    return new Polynomial(result.reverse());
  }

  xFactor() {
    if (this.constants.length != 3 || this.constants[0] != 1) return [];
    let a = this.constants[this.constants.length - 2];
    let b = this.constants[this.constants.length - 1];
    return Polynomial.xFactor(a, b);
  }

  getQuadraticSolution() {
    return Polynomial.getQuadraticSolution(this);
  }

  static xFactor(a, b) {
    let factors = new Set();
    let as = Polynomial.getFactorsOf(a, true);
    let bs = Polynomial.getFactorsOf(b, true);
    for (let c of bs.concat(as)) {
      for (let d of as.concat(bs))
        if (c * d == b && c + d == a) factors.add(c, d);
    }
    return [...factors];
  }

  static getQuadraticSolution(poly) {
    let a = poly.constants[0], b = poly.constants[1], c = poly.constants[2];
    let part1 = Math.sqrt((b * b) - (4 * a * c));
    let part2 = [-b + part1, -b - part1];
    let part3 = [part2[0] * 0.5 / a, part2[1] * 0.5 / a];
    return [...new Set(part3)];
  }

  static getFactorsOf(n, includeNegatives = false) {
    if (typeof n != "number" || n == 0) return [];
    n = Math.abs(n);
    let arr = [n], range = Math.ceil(n * 0.5);
    for (let i = range; i >= 1; i--) if (n % i == 0) arr.push(i);
    return includeNegatives ? arr.reduce((acc, cur) => acc.concat(cur * -1), arr) : arr;
  }

  static htmlify(str, returnString = true) {
    let waitingForNonDigit = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "^") {
        str = str.substring(0, i) + "<sup>" + str.substring(i + 1);
        waitingForNonDigit = true;
        i += 5;
      } else if (waitingForNonDigit && ![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(str[i]))) {
        str = str.substring(0, i) + "</sup>" + str.substring(i);
        waitingForNonDigit = false;
        i += 6;
      }
    }
    str += "</sup>";
    str = str.replace(/\x/g, "<i>x</i>")
    str = str.replace(/\+/g, "&plus;");
    str = str.replace(/\-/g, "&minus;");

    let p = document.createElement("p");
    p.innerHTML = str;
    return returnString ? str : p;
  }
}
