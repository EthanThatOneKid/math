window.onload = () => $("input").change(() => $("#y-out").text(new Polynomial($("#poly-in").val()).solveForY($("#x-in").val())));

let poly = new Polynomial("2,1,-19,-9,9");
console.log(poly.htmlify());
