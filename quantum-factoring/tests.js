// Tests:

console.time("gcd");
const test_gcd_in = [81, 63];
const test_gcd_out = gcd(...test_gcd_in);
console.log({test_gcd_in, test_gcd_out});
console.timeEnd("gcd");

console.time("matmul");
const test_matmul_in = [[[1, 2, 3],[4, 5, 6]],[[7, 8],[9, 10],[11, 12]]];
const test_matmul_out = matmul(...test_matmul_in);
console.log({test_matmul_in, test_matmul_out});
console.timeEnd("matmul");

console.time("matmul_es6");
const test_matmul_es6_in = [[[1, 2, 3],[4, 5, 6]],[[7, 8],[9, 10],[11, 12]]];
const test_matmul_es6_out = matmul_es6(...test_matmul_es6_in);
console.log({test_matmul_es6_in, test_matmul_es6_out});
console.timeEnd("matmul_es6");

console.time("matmul_1line");
const test_matmul_1line_in = [[[1, 2, 3],[4, 5, 6]],[[7, 8],[9, 10],[11, 12]]];
const test_matmul_1line_out = matmul_1line(...test_matmul_1line_in);
console.log({test_matmul_1line_in, test_matmul_1line_out});
console.timeEnd("matmul_1line");
