
// Helper Functions:

const gcd = (a, b) => b ? gcd(b, a % b) : a;

const matmul = (v1, v2) => {
  for (var y1 = 0, product = []; y1 < v1.length; y1++) {
    for (var y2 = 0, row = []; y2 < v1.length; y2++) {
      for (var x = sum = 0; x < v2.length; x++)
        sum += v1[y1][x] * v2[x][y2];
      row.push(sum);
    } product.push(row);
  } return product;
}

const matmul_es6 = (a, b) => {
  return new Array(a.length).fill(0)
    .map(row => new Array(b[0].length).fill(0))
    .map((row, i) => row.map((val, j) => {
      return a[i].reduce((sum, cur, k) => cur * b[k][j] + sum, 0);
    }));
}

const matmul_1line = (a, b) => new Array(a.length).fill(0).map(row => new Array(b[0].length).fill(0)).map((row, i) => row.map((val, j) => a[i].reduce((sum, cur, k) => cur * b[k][j] + sum, 0)));


// Tests:

const test_gcd_in = [81, 63];
const test_gcd_out = gcd(...test_gcd_in);
console.log({test_gcd_in, test_gcd_out});

const test_matmul_in = [[[1, 2, 3],[4, 5, 6]],[[7, 8],[9, 10],[11, 12]]];
const test_matmul_out = matmul(...test_matmul_in);
console.log({test_matmul_in, test_matmul_out});

const test_matmul_es6_in = [[[1, 2, 3],[4, 5, 6]],[[7, 8],[9, 10],[11, 12]]];
const test_matmul_es6_out = matmul_es6(...test_matmul_es6_in);
console.log({test_matmul_es6_in, test_matmul_es6_out});

const test_matmul_1line_in = [[[1, 2, 3],[4, 5, 6]],[[7, 8],[9, 10],[11, 12]]];
const test_matmul_1line_out = matmul_1line(...test_matmul_1line_in);
console.log({test_matmul_1line_in, test_matmul_1line_out});
