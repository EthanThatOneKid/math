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

<h3>available functions:</h3>

<ul>

  <li>
    new Lindenmayer(axiom, rules)
    <ul>
      <li>creates a new instance of Lindenmayer class</li>
      <li>axiom marks the initial generation</li>
      <li>rules declares how generate() will generate future generations</li>
    </ul>
    <h2>Methods of Lindenmayer</h2>
    <ul>
      <li>
        generate(epochs)
        <ul>
          <li>updates generations over an amount of epochs</li>
          <li>default epochs = 1</li>
        </ul>
      </li>

      <li>
        revert(generation)
        <ul>
          <li>reverts back to a previous generation</li>
          <li>default generation = one before current</li>
        </ul>
      </li>

      <li>
        birth(mutator)
        <ul>
          <li>mutator = (axiom, rules) => return object of a slightly mutated axiom and rules</li>
          <li>returns an offspring</li>
          <li>if no mutator is available, returns a perfect clone</li>
        </ul>
      </li>
    </ul>
  </li>

  <li>
    new Lindenmayer(axiom, rules)
    <ul>
      <li>creates a new instance of Lindenmayer class</li>
      <li>axiom marks the initial generation</li>
      <li>rules declares how generate() will generate future generations</li>
    </ul>
    <h2>Methods of Lindenmayer</h2>
    <ul>
      <li>
        generate(epochs)
        <ul>
          <li>updates generations over an amount of epochs</li>
          <li>default epochs = 1</li>
        </ul>
      </li>

      <li>
        revert(generation)
        <ul>
          <li>reverts back to a previous generation</li>
          <li>default generation = one before current</li>
        </ul>
      </li>

      <li>
        birth(mutator)
        <ul>
          <li>mutator = (axiom, rules) => return object of a slightly mutated axiom and rules</li>
          <li>returns an offspring</li>
          <li>if no mutator is available, returns a perfect clone</li>
        </ul>
      </li>
    </ul>
  </li>

</ul>
