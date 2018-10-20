// ShiffNumber Experiment
// Inspired by Dan Shiffman
// This small lib can convert any number of any base to any other base
// YouTube LiveStream: https://www.youtube.com/watch?v=jSzmac4Rri8&start=4620


class ShiffNumber {

  /**
   * Convert any-based number to any other base.
   * @param {string} num - any-based number.
   * @param {number} from - base of 'num'.
   * @param {number} to - target base for 'num'.
   * @param {number} [digitLength=7] - amount of digits needed to accurately describe 'num' in the target base.
   */
  static convertBase(num, from, to, digitLength = 7) {
    let bits = "",
        rem = ShiffNumber.convertToBaseTen(num, from),
        sfionz = false; // _S_aw _F_irst _I_ndex _O_f _N_on _Z_ero
    for (let i = digitLength; i >= 0; i--) {
      const divisor = Math.pow(to, i);
      let bitValue = Math.floor(rem / divisor);
      if (bitValue > 9) bitValue = String.fromCharCode(Number(bitValue) + 55);
      if (!sfionz && bitValue != "0") sfionz = true;
      bits += sfionz ? bitValue : "";
      rem %= divisor;
    }
    return bits;
  }

  static convertToBaseTen(num, from) {
    const digits = num.split("");
    const sum = digits
      .reduceRight((acc, cur, i) => {
        let operated = Number(cur) || ShiffNumber.getValueOfCharacter(cur);
        operated *= Math.pow(from, digits.length - 1 - i);
        return acc += operated;
      }, 0);
    return sum;
  }

  static getValueOfCharacter(character) {
    let value = character
      .toUpperCase()
      .charCodeAt(0)
      - 65;
    return value >= 0 && value <= 25 ? value + 10 : 0;
  }

}
