# Welcome to PolyCalc!
polycalc.js is a library for doing math with polynomial functions!

## Documentation:
### Initialization:
> `const poly = new Polynomial(constants)`
  * `constants` = array of constants of polynomial
  * so, for example `constants = [1, -2, 3]` would result in 'x^2 - 2x + 3'
### Methods:
  * `poly.solveForY(x)`
    * `x` = any number
    * finds the y value associated with that x value
    * returns a number representing the resulting y value
  * `poly.solveForRationalZeros()`
    * uses the P's and Q's method to find all of the rational solutions to a polynomial
    * returns an array of solutions
    * if no rational solutions exist, the returned array is empty
  * `poly.stringify()`
    * returns a string of the polynomial in a human-readable format
  * `poly.log()`
    * prints the result of `poly.stringify()` to the console
  * `poly.combine(poly2)`
    * `poly2` = an instance of the Polynomial class
    * returns the combination of two Polynomial instances in the form of a new Polynomial instance
  * `poly.xFactor()`
    * uses the [x-factor](https://www.khanacademy.org/math/algebra/polynomial-factorization/factoring-quadratics-1/a/factoring-quadratics-leading-coefficient-1) method to find factors of a trinomial in which the leading coefficient is 1
    * returns array of factors
  * `poly.getQuadraticSolution()`
    * uses the quadratic formula to find any solutions that may be irrational
    * only works with a trinomial Polynomial instance
    * returns array with two solutions
