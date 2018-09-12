window.onload = changeAll;
let hand;

function changeCard(id) {
  var card = document.getElementById(id).getElementsByClassName("card")[0].value;
  var suit = document.getElementById(id).getElementsByClassName("suit")[0].value;
  var path = "../cgi-bin/" + card.toLowerCase() + suit.toLowerCase() + ".png";
  document.getElementById(id).getElementsByClassName("display")[0].src = path;
  loadHand();
}

function changeAll() {
  for (let i = 1; i < 6; i++) changeCard("card" + i);
}

function loadHand() {
  gimme = [];
  const royalty = {"A": 1, "J": 10, "Q": 10, "K": 10};
  for (let i = 1; i < 6; i++) {
    let card = document.getElementById("card" + i).getElementsByClassName("card")[0].value,
        suit = document.getElementById("card" + i).getElementsByClassName("suit")[0].value;
    gimme.push({
      "value": Number(card) || royalty[card],
      "suit": suit,
      "card": Number(card) || card
    });
  }
  hand = new Cribbage(gimme);
  computeHand();
}

function computeHand() {
  let el = Object.entries(hand.total).reduce((tb, row) => {
    let tr = document.createElement("tr"),
        td1 = document.createElement("td"),
        td2 = document.createElement("td");
    td1.innerHTML = row[0];
    td2.innerHTML = row[1];
    tr.appendChild(td1);
    tr.appendChild(td2);
    tb.appendChild(tr);
    return tb;
  }, document.createElement("table"));
  el.align = "center";

  document.getElementById("result").innerHTML = el.outerHTML;
}

/*

function optStarter() {
  let bestSoFar;
  const royalty = {"A": 1, "J": 10, "Q": 10, "K": 10};
  const suits = ["S", "C", "D", "H"];
  const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  for (let suit of suits) {
    for (let card of cards) {
      let gimmeCard = {
        "value": Number(card) || royalty[card],
        "suit": suit,
        "card": Number(card) || card
      };
      let gimmeHand = [...hand.hand];
      gimmeHand[4] = gimmeCard;
      let gimmeCrib = new Cribbage(gimmeHand);
      let gimmeTotal = gimmeCrib.total;
      if (!bestSoFar) {
        bestSoFar = {"card": gimmeCard, "total": gimmeTotal};
        continue;
      } else if (gimmeTotal > bestSoFar.total && gimmeCrib.isValid)
        bestSoFar = {"card": gimmeCard, "total": gimmeTotal};
    }
  }

  let cardIndex = bestSoFar.card.card == "A" ? 1 :
    bestSoFar.card.card == "J" ? 11 :
    bestSoFar.card.card == "Q" ? 12 :
    bestSoFar.card.card == "K" ? 13 : bestSoFar.card.card;

  let suitIndex = bestSoFar.card.suit == "S" ? 1 :
    bestSoFar.card.suit == "C" ? 2 :
    bestSoFar.card.suit == "D" ? 3 : 4;

  let path = "../cgi-bin/" + bestSoFar.card.card.toLowerCase() + bestSoFar.card.suit.toLowerCase() + ".png";

  document.getElementById("card5").getElementsByClassName("card")[0].selectedIndex = `${cardIndex}`;
  document.getElementById("card5").getElementsByClassName("suit")[0].selectedIndex = `${suitIndex}`;
  document.getElementById("card5").getElementsByClassName("display")[0].src = path;

  loadHand();
}

*/
