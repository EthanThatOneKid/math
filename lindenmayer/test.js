let tree = new Lindenmayer("0", [
  ["1", "11"],
  ["0", "1[0]0"]
]);

tree.generate(2);

console.log(tree.currentGeneration);

let algae = new Lindenmayer("A", [
  ["A", "AB"],
  ["B", "A"]
]);

algae.generate(5);

console.log(algae.currentGeneration);
