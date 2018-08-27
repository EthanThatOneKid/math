let cnv, stats;
let rose;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("cnv-container");

  rose = new Rose(1, 1, 100);

  stats = new Stats();
  stats.dom.style.top = stats.dom.style.left = "";
  stats.dom.style.bottom = stats.dom.style.right = "0";
  document.body.appendChild(stats.dom);
}

function draw() {
  background(255);
  translate(width * 0.5, height * 0.5);

  let n = Number(document.getElementById("n").value),
      d = Number(document.getElementById("d").value);
  rose.detail = Number(document.getElementById("detail").value);
  document.getElementById("console").innerHTML = `n = ${n}, d = ${d}`;

  rose.changeNandD(n, d);
  rose.render();

  stats.update();
  //noLoop();
}
