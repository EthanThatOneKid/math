let mandelbrot, stats;
let cnv, OFFX = 0, OFFY = 0, OFFINC = 5;

let gui, gui_config;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("cnv-container");

  mandelbrot = new Mandelbrot(width);

  initializeGUI();

  stats = new Stats();
  stats.dom.style.top = stats.dom.style.left = "";
  stats.dom.style.bottom = stats.dom.style.right = "0";
  $("body").append(stats.dom);

  //$("input").change(updateMandelbrot);
}

function draw() {
  background(255);
  translate(width * 0.5 + OFFX, height * 0.5 + OFFY);
  renderMandelbrot();
  stats.update();
}

function renderMandelbrot() {
  for (let vert of mandelbrot.points) {
    point(vert[0] * width, vert[1] * height);
  }
}

function initializeGUI() {
  gui = new dat.GUI({autoPlace: false});
  gui_config = {iterations: 10, minZoom: -1.5, maxZoom: 1.5};
  let its_controller = gui.add(gui_config, "iterations", 5, 100);
  let miz_controller = gui.add(gui_config, "minZoom", -3, 3).step(0.001);
  let maz_controller = gui.add(gui_config, "maxZoom", -3, 3).step(0.001);
  its_controller.onFinishChange(val => {mandelbrot.iterations = Math.floor(val); mandelbrot.init();});
  miz_controller.onChange(val => {mandelbrot.zoom.min = val; mandelbrot.init();});
  maz_controller.onChange(val => {mandelbrot.zoom.max = val; mandelbrot.init();});
  $("#cnv-container").append(gui.domElement);
}

document.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowUp": OFFY += OFFINC; break;
    case "ArrowDown": OFFY -= OFFINC; break;
    case "ArrowLeft": OFFX += OFFINC; break;
    case "ArrowRight": OFFX -= OFFINC; break;
    default: break;
  }
});
