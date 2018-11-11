
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

// Tests:

const test_gcd_in = [81, 63];
const test_gcd_out = gcd(...test_gcd_in);
console.log({test_gcd_in, test_gcd_out});

const test_matmul_in = [[[1, 2, 3],[4, 5, 6]],[[7, 8],[9, 10],[11, 12]]];
const test_matmul_out = matmul(...test_matmul_in);
console.log({test_matmul_in, test_matmul_out});
