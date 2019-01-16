# Than.js

## About
Than.js is a JavaScript library of physics operations.

## Documentation
### Initialization:
> `const than = new Than(config);`
* `config` =
  ```javascript
  {
    "type": <string "polar" or "cartesian">
    "data": {
      "x": <number>, // mandatory if this.type == "cartesian"
      "y": <number>, // mandatory if this.type == "cartesian"
      "theta": <number (degrees)>, // mandatory if this.type == "polar"
      "magnitude": <number> // mandatory if this.type == "polar"
    }
  }
  ```
### Methods:
* `than.add(than2)`
  * `than2` = another instance of the Than class
  * updates the original than
  * returns a copy of the updated than
* `than.copy()`
  * returns a copy of this Than instance
### Statics:
* `Than.cartesian(coords)`
  * `coords` =
    ```javascript
    {
      "theta": <number (radians)>,
      "magnitude": <number>
    }
    ```
  * returns
    ```javascript
    {
      "x": <number>,
      "y": <number>
    }
    ```
* `Than.polar(coords)`
  * `coords` =
    ```javascript
    {
      "x": <number>,
      "y": <number>
    }
    ```
  * returns
    ```javascript
    {
      "theta": <number (radians)>,
      "magnitude": <number>
    }
    ```
* `Than.radians(degrees)`
  * `degrees` = an angle in degrees
  * returns that angle in radians
* `Than.degrees(radians)`
  * `radians` = an angle in radians
  * returns that angle in degrees

## Examples
* [Conversion](https://ethanthatonekid.github.io/math/physics/conversion)
* [Sum Vectors](https://ethanthatonekid.github.io/math/physics/sumvectors)
