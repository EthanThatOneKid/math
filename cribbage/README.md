# Cribbage.js

## 😊 [The Cribbage Calculator](https://htmlpreview.github.io/?https://github.com/EthanThatOneKid/math/blob/master/cribbage/demo/index.html)😊

## Documentation:
### initialization:
> `const crib = new Cribbage(hand);`
* `hand` =
  ```javascript
  [
    {
      "value": <integer 1-10>,
      "suit": <string "S", "C", "D", or "H">,
      "card": <either integer 1-10 or string "J", "Q", or "K">
    } // ... x5
  ]
  ```
* If no `hand` is provided, the class initializes with a randomized hand.
### statics:
* `Cribbage.randomHand(len)`
  * `len` = integer signifying the amount of cards in the hand. Falls back to `5`.
  * returns an array of randomly generated plain card objects.
* `Cribbage.fifteens(hand)`
  * returns the amount of 15's in `hand`, but doubled so it signifies point value.
* `Cribbage.matches(hand)`
  * returns list of matches in `hand` with the amount of itself as an entries-like array.
* `Cribbage.flush(hand)`
  * returns the highest amount of cards that contains the same suit.
* `Cribbage.run(hand)`
  * returns an array of the cards that follow a 'run' pattern.
* `Cribbage.knob(hand)`
  * returns a 1 if a possible Jack card in the hand is the same suit as the starter card. Else, returns 0.
* `Cribbage.isValid(hand)`
  * returns true if the hand has no duplicate cards and otherwise returns false.
* `Cribbage.total(crib)`
  * `crib` = Cribbage Object
  * returns compilation of all points and data needed to understand the point value of that instance of a Cribbage class.
