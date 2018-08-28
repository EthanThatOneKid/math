# Lindenmayer.js
* [Wiki](https://en.wikipedia.org/wiki/L-system)
* [Dragon](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/dragon/index.html)
* [Binary](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/binary/index.html)
* [Sierpinski](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/sierpinski/index.html)
* [Koch](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/koch/index.html)
* [Plant](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/plant/index.html)
* [Hilbert](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/hilbert/index.html)
* [Moore](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/moore/index.html)
* [Peano](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/peano/index.html)
* [Box](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/box/index.html)
* [Crystal](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/crystal/index.html)
* [Rings](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/rings/index.html)
* [Seaweed](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/seaweed/index.html)
* [Snowflake](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/snowflake/index.html)
* [Tree](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/tree/index.html)
* [Spruce](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/spruce/index.html)
* [Hand of Davidson](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/hand/index.html)

## available functions:
* '''new Lindenmayer(axiom, rules)'''
  * creates a new instance of Lindenmayer class
  * axiom marks the initial generation
  * rules declares how generate() will generate future generations
  * ### methods
    * '''generate(epochs)'''
      * updates generations over an amount of epochs
      * default epochs = 1
    * '''revert(generation)'''
      * reverts back to a previous generation
      * default generation = one before current
    * '''birth(mutator)'''
      * mutator = (axiom, rules) => return object of a slightly mutated axiom and rules
      * returns an offspring
      * if no mutator is given, returns a clone
