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

const scamul = (A, B) => {
  for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < B[i].length; j++)
      B[i][j] *= A;
  }
  return B;
}

// const matmul_es6 = (a, b) => {
//   return new Array(a.length).fill(0)
//     .map(row => new Array(b[0].length).fill(0))
//     .map((row, i) => row.map((val, j) => {
//       return a[i].reduce((sum, cur, k) => cur * b[k][j] + sum, 0);
//     }));
// }
//
// const matmul_1line = (a, b) => new Array(a.length).fill(0).map(row => new Array(b[0].length).fill(0)).map((row, i) => row.map((val, j) => a[i].reduce((sum, cur, k) => cur * b[k][j] + sum, 0)));
