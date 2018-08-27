let cnv, stats;
let card = new Cardioid();

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("cnv-container");

  stats = new Stats();
  stats.dom.style.top = stats.dom.style.left = "";
  stats.dom.style.bottom = stats.dom.style.right = "0";
  document.body.appendChild(stats.dom);
}

function draw() {
  background(255);
  translate(width * 0.25, height * 0.5);

  card.changeOffset(Number(document.getElementById("offset").value));
  card.render();
  
  stats.update();
}
