let l = new Lindenmayer("A", [
  [["A"], ["AB"]],
  [["B"], ["A"]]
]);

l.generate(5);

console.log(l.currentGeneration());
