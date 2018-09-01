let array;

function updateStatsSummary() {
  array = JSON.parse(document.getElementById("array2xN").value);
  let regression = Stats.linearRegression(array);
  let html = `y = ${regression.a}x + ${regression.b}`;
  document.getElementById("stats-summary").innerHTML = html;
}
