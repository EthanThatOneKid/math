class Stats {

  constructor(array = []) {
    this.data = array;
  }

  add(n) {
    this.data.push(n);
  }

  remove(i) {
    this.data.splice(i, 1);
  }

  log() {
    console.log(this.data);
  }

  copy() {
    return Stats.copy(this.data);
  }

  summary() {
    return {
      "average": Stats.average([...this.data]),
      "median": Stats.median([...this.data]),
      "mode": Stats.mode([...this.data]),
      "boxplot": JSON.stringify(Stats.boxplot([...this.data]))
    };
  }

  htmlSummary() {
    let summary = this.summary();
    return Object.entries(summary).reduce((acc, cur) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      td1.innerHTML = cur[0];
      td2.innerHTML = cur[1];
      tr.appendChild(td1);
      tr.appendChild(td2);
      acc.appendChild(tr);
      return acc;
    }, document.createElement("table"));
  }

  static average(list) {
    return list.reduce((sum, cur) => sum += cur, 0) / list.length;
  }

  static median(list) {
    list = list.sort((a, b) => a - b);
    let center = Math.floor(list.length * 0.5);
    return list.length % 2 == 0 ?
      Stats.average([list[center - 1], list[center]]) :
      list[center];
  }

  static mode(list) {
    let hist = Stats.histogram(list);
    hist = hist.sort((a, b) => b[1] - a[1]);
    return Number(hist[0][0]);
  }

  static copy(data) {
    return new Stats([...data]);
  }

  static boxplot(data) {
    data = data.sort((a, b) => a - b);
    let center = Math.floor(data.length * 0.5);
    return {
      min: data[0],
      q1: Stats.median(data.slice(0, center)),
      median: Stats.median(data),
      q3: Stats.median(data.slice(data.length % 2 == 0 ? center : center + 1)),
      max: data[data.length - 1]
    };
  }

  static linearRegression(array2xN) {
    let sumX = array2xN.reduce((acc, cur) => acc += cur[0], 0);
    let sumY = array2xN.reduce((acc, cur) => acc += cur[1], 0);
    let sumXY = array2xN.reduce((acc, cur) => acc += cur[0] * cur[1], 0);
    let sumX2 = array2xN.reduce((acc, cur) => acc += cur[0] * cur[0], 0);
    let sumY2 = array2xN.reduce((acc, cur) => acc += cur[1] * cur [1], 0);
    let n = array2xN.length;
    let denominator = ((n * sumX2) - (sumX * sumX));
    let a = ((n * sumXY) - (sumX * sumY)) / denominator;
    let b = ((sumY * sumX2) - (sumX * sumXY)) / denominator;
    return {a, b};
  }

  static histogram(list) {
    let hist = list.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {});
    return Object.entries(hist).sort((a, b) => a[0] - b[0]);
  }

}
