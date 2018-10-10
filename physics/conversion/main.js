/*
  +---------------+
  |  Conversion   |
  |   Than.js     |
  +---------------+
    \_ By EthanThatOneKid
*/

// COORDS
applyOnChangeTo([
  document.getElementById("theta-in"),
  document.getElementById("magnitude-in")
], event => {
  const cartesian = Than.cartesian({
    theta: Than.radians(Number(document.getElementById("theta-in").value)),
    magnitude: Number(document.getElementById("magnitude-in").value)
  });
  document.getElementById("x-in").value = cartesian.x;
  document.getElementById("y-in").value = cartesian.y;
});

applyOnChangeTo([
  document.getElementById("x-in"),
  document.getElementById("y-in")
], event => {
  const polar = Than.polar({
    x: Number(document.getElementById("x-in").value),
    y: Number(document.getElementById("y-in").value)
  });
  document.getElementById("theta-in").value = Than.degrees(polar.theta);
  document.getElementById("magnitude-in").value = polar.magnitude;
});

// HELPER FUNCTIONS
function applyOnChangeTo(nodeList, fn) {
  nodeList.forEach(node => node.addEventListener("change", fn));
}
