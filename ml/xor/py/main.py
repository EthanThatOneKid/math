'''
const train_xs = tf.tensor2d([[0, 0], [1, 0], [0, 1], [1, 1]]);
const train_ys = tf.tensor2d([[0],    [1],    [1],    [0]]);

const model = tf.sequential();
const hidden = tf.layers.dense({
  inputShape: [2],
  units: 16,
  activation: "sigmoid"
});
const output = tf.layers.dense({
  units: 1,
  activation: "sigmoid"
});
model.add(hidden);
model.add(output);
model.compile({
  optimizer: tf.train.adam(0.2),
  loss: "meanSquaredError"
});

model.fit(train_xs, train_ys, {
  shuffle: true,
  epochs: 100
}).then(stats => document.getElementById("metrics").innerHTML = "loss: " + stats.history.loss[0]);

function predict() {
  let x = [document.getElementById("in1").value, document.getElementById("in2").value];
  let y =  model.predict(tf.tensor([x])).dataSync();
  document.getElementById("ans").innerHTML = y;
}
'''
