const shor_factor = (N) => {

  N = 21;
  const x = 11;

  // length of registers r1 and r2, q
  const q = Math.ceil(Math.log2(N * N));

  // closest bigger power of 2 to N^2, Q
  const Q = Math.pow(2, q);

  const register = [];
  for (let qubit = 0; qubit < Q; qubit++) {
    register.push([qubit, Math.pow(x, qubit) % N]);
  }

  return register;
  
};

// Helper Classes
class Complex {

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(c) {
    if (c instanceof Complex) {
      this.a += c.a;
      this.b += c.b;
    } return this.copy;
  }

  mul(c) {
    if (c instanceof Complex) {
      this.a = (this.a * c.a) - (this.b * c.b);
      this.b = (this.b * c.a) + (this.a * c.b);
    } return this.copy();
  }

  scamul(n) {
    this.a *= n;
    this.b *= n;
    return this.copy();
  }

  mag() {
    return Math.sqrt((this.a * this.a) + (this.b * this.b));
  }

  conjugate() {
    return new Complex(this.a, -1 * this.b);
  }
  
  copy() {
    return new Complex(this.a, this.b);
  }

}

// Helper Functions
const gcd = (a, b) => b ? gcd(b, a % b) : a;

const matmul = (A, B) => {
  const M = A.length, N = A[0].length, L = B[0].length;
  for (var i = 0, product = []; i < M; i++) {
    for (var j = 0, row = []; j < L; j++) {
      for (var k = sum = 0; k < N; k++)
        sum += A[i][k] * B[k][j];
      row.push(sum);
    } product.push(row);
  } return product;
};

const scamul = (A, scalar) => {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++)
      A[i][j] *= scalar;
  } return A;
};

const ketmul = (A, B) => {
  for (var i = 0, result = []; i < A.length; i++) {
    for (let j = 0; j < B.length; j++)
      result.push(A[i] * B[j]);
  } return result;
};

const to_base2 = (base10) => {
  return base10.toString(2).split("")
    .map(i => i == "1" ? [0, 1] : [1, 0])
    .reduce((acc, cur) => acc.length ? ketmul(acc, cur) : cur, []);
};

const apply_hadamard = (A) => {
  const H = scamul([[1, 1], [1, -1]], Math.sqrt(2) * 0.5);
  return matmul(H, A);
};
