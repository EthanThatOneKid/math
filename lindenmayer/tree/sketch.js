let tree, turtle;
let cnv, OFFX = 0, OFFY = 0, OFFINC = 5;
let ANGLE = Math.PI / 9;
let stats;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("cnv-container");

  tree = new Lindenmayer("F", [
    ["F", "F[+F][-F]"]
  ]);

  turtle = new Turtle(tree, {
    "init": () => {
      return {
        "x": 0,
        "y": 0,
        "a": Math.PI * 0.5
      };
    },
    "F": (pos, len) => {
      let gimme = {x: Math.cos(pos.a) * len, y: Math.sin(pos.a) * len};
      line(0, 0, gimme.x, -gimme.y);
      translate(gimme.x, -gimme.y);
      return pos;
    },
    "+": (pos) => {
      rotate(ANGLE);
      return pos;
    },
    "-": (pos) => {
      rotate(-ANGLE);
      return pos;
    },
    "[": (pos) => {
      push();
      return pos;
    },
    "]": (pos) => {
      pop();
      return pos;
    }
  }, 20);

  turtle.generate(3);
  generate();

  stats = new Stats();
  stats.dom.style.top = stats.dom.style.left = "";
  stats.dom.style.bottom = stats.dom.style.right = "0";
  document.body.appendChild(stats.dom);
}

function draw() {
  background(255);
  translate(width * 0.5 + OFFX, height * 0.75 + OFFY);
  ANGLE = Number(document.getElementById("a").value);
  document.getElementById("data").innerHTML = Math.round(ANGLE * 57.3) + "deg";
  turtle.render();
  stats.update();
}

function generate(dir) {
  switch (dir) {
    case "forwards": turtle.generate(); break;
    case "backwards": turtle.generate(-1); break;
    case "default": break;
  }
  document.getElementById("gen").innerHTML = turtle.l.generations.length - 1;
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
