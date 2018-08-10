window.onload = () => $("input").change(() => {
  let poly = new Polynomial($("#poly-in").val());
  let ans = JSON.stringify(poly.solutions);
  $("#zeros-out").text(ans);
  $("#rich-poly").html(`<h3>${poly.htmlify()}</h3><br><label>Desmos-Readable Version: </label><code>${poly.stringify()}</code>`);
});
