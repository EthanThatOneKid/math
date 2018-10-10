/*
  +---------------+
  |  Sum Vectors  |
  |   Than.js     |
  +---------------+
    \_ By EthanThatOneKid
*/

// TESTING
let t1 = new Than({
  type: "polar",
  data: {
    theta: 45,
    magnitude: 5
  }
});

let t2 = new Than({
  type: "polar",
  data: {
    theta: -45,
    magnitude: 5
  }
});

let t3 = t1.add(t2);

t3.log();

// HELPER FUNCTIONS
