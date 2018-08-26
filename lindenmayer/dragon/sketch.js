let dragon, turtle;
let cnv, OFFX = 0, OFFY = 0, OFFINC = 5;
let stats;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("cnv-container");

  dragon = new Lindenmayer("f", [
    ["f", "f-h"],
    ["h", "f+h"]
  ]);

  turtle = new Turtle(dragon, {
    "init": () => {
      return {
        "x": 0,
        "y": 0,
        "a": Math.PI * 0.5
      };
    },
    "f": (pos, len) => {
      let gimmePos = {
        "x": pos.x + (Math.cos(pos.a) * len),
        "y": pos.y + (Math.sin(pos.a) * len),
        "a": pos.a
      };
      line(pos.x, pos.y, gimmePos.x, gimmePos.y);
      return gimmePos;
    },
    "h": (pos, len) => {
      let gimmePos = {
        "x": pos.x + (Math.cos(pos.a) * len),
        "y": pos.y + (Math.sin(pos.a) * len),
        "a": pos.a
      };
      line(pos.x, pos.y, gimmePos.x, gimmePos.y);
      return gimmePos;
    },
    "-": (pos) => {
      pos.a += Math.PI * 0.5;
      return pos;
    },
    "+": (pos) => {
      pos.a -= Math.PI * 0.5;
      return pos;
    }
  }, 2);

  turtle.generate(6);
  generate();

  stats = new Stats();
  stats.dom.style.top = stats.dom.style.left = "";
  stats.dom.style.bottom = stats.dom.style.right = "0";
  document.body.appendChild(stats.dom);
}

function draw() {
  background(255);
  translate(width * 0.5 + OFFX, height * 0.5 + OFFY);
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
