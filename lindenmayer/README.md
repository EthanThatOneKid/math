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

<h3>available functions:</h3>

<ul>

  <li>
    new Lindenmayer(axiom, rules)
    <ul>
      <li>creates a new instance of Lindenmayer class</li>
      <li>axiom marks the initial generation</li>
      <li>rules declares how generate() will generate future generations</li>
    </ul>
  </li>

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

</ul>
