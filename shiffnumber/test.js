// This file runs tests for all
// of the experiments in this
// JavaScript SubRepo by EthanThatOneKid

// Main CSS styling for title-intended console logs
const css = "color: green; font-size: 2em; font-family: sans-serif; text-decoration: underline overline;";

// ************ E X P E R I M E N T S ************
const ShiffNumberExperimentation = () => {

  console.log("%cShiffNumber Experiment", css);

  let a = "A";
  a = ShiffNumber.getValueOfCharacter(a);
  console.log("getValueOfCharacter", {a});

  let fourtytwo = "101010";
  fourtytwo = ShiffNumber.convertBase(fourtytwo, 2, 10);
  console.log("convertBase", {fourtytwo});

  let sixtynine = "1000101";
  sixtynine = ShiffNumber.convertBase(sixtynine, 2, 10);
  console.log("convertBase", {sixtynine});

  let fourtwenty = "1A4";
  fourtwenty = ShiffNumber.convertBase(fourtwenty, 16, 10);
  console.log("convertBase", {fourtwenty});

  let twofiftyfive = "255";
  twofiftyfive = ShiffNumber.convertBase(twofiftyfive, 10, 16);
  console.log("convertBase", {twofiftyfive});

  let thirteen = "111";
  thirteen = ShiffNumber.convertBase(thirteen, 3, 10);
  console.log("convertBase", {thirteen});

  let eight = "8";
  eight = ShiffNumber.convertBase(eight, 10, 2);
  console.log("convertBase", {eight});

};

// ******************* M A I N *******************
const main = (() => {

  ShiffNumberExperimentation();

})();
