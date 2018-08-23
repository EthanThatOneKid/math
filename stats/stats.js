class Stats {

  static average(list) {
    return list.reduce((sum, cur) => sum += cur, 0) / list.length;
  }

  static median(list) {
    list = list.sort((a, b) => a - b);
    let center = Math.floor(list.length * 0.5);
    return list.length % 2 == 0 ?
      Stats.average([list[center - 1], list[center]]) :
      list[center]
  }

  static regression(list) {
    return list;
  }

}
