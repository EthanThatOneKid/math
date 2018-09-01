window.onload = changeAll;

function changeCard(id) {
  var card = document.getElementById(id).getElementsByClassName("card")[0].value;
  var suit = document.getElementById(id).getElementsByClassName("suit")[0].value;
  var path = "../cgi-bin/" + card.toLowerCase() + suit.toLowerCase() + ".png";
  document.getElementById(id).getElementsByClassName("display")[0].src = path;
}

function changeAll() {
  for (let i = 1; i < 6; i++) changeCard("card" + i);
}
