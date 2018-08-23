const tests = {

  "average": new Test("average", () => {
    let list = [1, 2, 3];
    return Stats.average(list);
  }).expect(2),

  "medianOdd": new Test("medianOdd", () => {
    let list = [1, 2, 3];
    return Stats.median(list);
  }).expect(2),

  "medianEven": new Test("medianEven", () => {
    let list = [1, 2, 3, 4];
    return Stats.median(list);
  }).expect(2.5)

};

console.log(tests)
