let cnv, stats;
let circle;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("cnv-container");

  circle = new PrimesCircle(width * 0.375);

  stats = new Stats();
  stats.dom.style.top = stats.dom.style.left = "";
  stats.dom.style.bottom = stats.dom.style.right = "0";
  document.body.appendChild(stats.dom);
}

function draw() {
  background(255);
  translate(width * 0.5, height * 0.5);

  circle.changePerimeter(Number(document.getElementById("perim").value));
  circle.render();

  stats.update();
}
