# Lindenmayer.js

## Demos:
* [Wiki](https://en.wikipedia.org/wiki/L-system)
* [Dragon](https://ethanthatonekid.github.io/math/lindenmayer/dragon)
* [Binary](https://ethanthatonekid.github.io/math/lindenmayer/binary)
* [Sierpinski](https://ethanthatonekid.github.io/math/sierpinski)
* [Koch](https://ethanthatonekid.github.io/math/lindenmayer/koch)
* [Plant](https://ethanthatonekid.github.io/math/lindenmayer/plant)
* [Hilbert](https://ethanthatonekid.github.io/math/lindenmayer/hilbert)
* [Moore](https://ethanthatonekid.github.io/math/indenmayer/moore)
* [Peano](https://ethanthatonekid.github.io/math/lindenmayer/peano)
* [Box](https://ethanthatonekid.github.io/math/lindenmayer/box)
* [Crystal](https://ethanthatonekid.github.io/math/lindenmayer/crystal)
* [Rings](https://ethanthatonekid.github.io/math/lindenmayer/rings)
* [Seaweed](https://ethanthatonekid.github.io/math/lindenmayer/seaweed)
* [Snowflake](https://ethanthatonekid.github.io/math/lindenmayer/snowflake)
* [Tree](https://ethanthatonekid.github.io/math/lindenmayer/tree)
* [Spruce](https://ethanthatonekid.github.io/math/lindenmayer/spruce)
* [Hand of Davidson](https://ethanthatonekid.github.io/math/lindenmayer/hand)

## Documentation:
* `new Lindenmayer(axiom, rules)`
  * creates a new instance of Lindenmayer class
  * axiom marks the initial generation
  * rules declares how generate() will generate future generations
  * ### methods
    * `generate(epochs)`
      * updates generations over an amount of epochs
      * default epochs = 1
    * `revert(generation)`
      * reverts back to a previous generation
      * default generation = one before current
    * `birth(mutator)`
      * mutator = (axiom, rules) => return object of a slightly mutated axiom and rules
      * returns an offspring
      * if no mutator is given, returns a clone
