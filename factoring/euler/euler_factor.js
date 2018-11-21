const euler_factor = (n, x_) => {

  while (true) {

    // if guess is not given, formulate a random guess, x
    let x = x_ ? x_ : Math.floor(Math.random() * (n - 1)) + 1;

    // if the guess is correct, end the function early
    let check_ans = gcd(x, n);
    if (check_ans > 1) return {factor: check_ans, p: "Good Guess!!", residue_summary: []};

    // calculate the period, p
    let p = 1;
    let residue_summary = [];
    for (let temp = x; temp != 1; p++) {
      residue_summary.push([temp]);
      temp = (temp * x) % n;
    }

    // if the period is odd, fail
    if (p % 2 != 0) {
      if (x_) return {period: `${p} is odd`, residue_summary: residue_summary};
      continue;
    }

    // if the period is equal to n - 1, n is prime
    if (p == n - 1) return {p, residue_summary};

    // calculate x^(p/2), m
    const m = residue_summary[(p * 0.5) - 1];
    if ((m + 1) % n == 0) {
      if (x_) return {p, residue_summary};
      continue;
    }

    // the factor shall equal gcd(m - 1, n)
    const factor = gcd(m - 1, n);
    return {factor, p, residue_summary};

  }

};

// Helper Functions:
const gcd = (a, b) => b ? gcd(b, a % b) : a;
