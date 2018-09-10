let hilbert, turtle;
let cnv, OFFX = 0, OFFY = 0, OFFINC = 5;
let stats;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("cnv-container");

  hilbert = new Lindenmayer("A", [
    ["A", "-BF+AFA+FB-"],
    ["B", "+AF-BFB-FA+"]
  ]);

  turtle = new Turtle(hilbert, {
    "init": () => {
      return {
        "x": 0,
        "y": 0,
        "a": 0
      };
    },
    "F": (pos, len) => {
      let gimmePos = {
        "x": pos.x + (Math.cos(pos.a) * len),
        "y": pos.y - (Math.sin(pos.a) * len),
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
    },
    "A": pos => pos,
    "B": pos => pos
  }, 5);

  turtle.generate(2);
  generate();

  stats = new Stats();
  stats.dom.style.top = stats.dom.style.left = "";
  stats.dom.style.bottom = stats.dom.style.right = "0";
  document.body.appendChild(stats.dom);
}

function draw() {
  background(255);
  translate(0 + OFFX, height - 1 + OFFY);
  turtle.render();
  // mapToCurve();
  stats.update();
}

function generate(dir) {
  switch (dir) {
    case "forwards": turtle.generate(2); break;
    case "backwards": turtle.generate(-2); break;
    case "default": break;
  }
  document.getElementById("gen").innerHTML = turtle.l.generations.length - 1;
}

/*

function mapToCurve() {
  let d = Number(document.getElementById("d").value);
  document.getElementById("d").max = Math.pow(3, turtle.l.generations.length);
  console.log(d);
  let pos = d2xy(turtle.l.generations.length, d);
  push();
  rotate(-Math.PI * 0.5);
  ellipse(pos[0] * 5, pos[1] * 5, 5, 5);
  pop();
}

function d2xy(n, d) {
  let x = 0, y = 0;
  let rx, ry, t = d;
  for (let s = 1; s < n; s *= 2) {
    rx = 1 & (t/2), ry = 1 & (t ^ rx);
    rot(s, x, y, rx, ry);
    x += s * rx;
    y += s * ry;
    t *= 0.25;
  }
  return [x, y];
  function rot(n, rx, ry) {
    if (ry == 0) {
      if (rx == 1) {
        x = n - 1 - x;
        y = n - 1 - y;
      }
      let t  = x;
      x = y;
      y = t;
    }
  }
}

*/

document.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowUp": OFFY += OFFINC; break;
    case "ArrowDown": OFFY -= OFFINC; break;
    case "ArrowLeft": OFFX += OFFINC; break;
    case "ArrowRight": OFFX -= OFFINC; break;
    default: break;
  }
});
