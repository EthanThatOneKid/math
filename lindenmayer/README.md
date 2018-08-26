# Lindenmayer.js
* [Dragon](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/lindenmayer/dragon/index.html)

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
