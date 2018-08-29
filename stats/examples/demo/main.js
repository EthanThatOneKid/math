let stats, editableList;

window.onload = () => {
  stats = new Stats();
  initSortable();

  stats.log();
  console.log(stats.summary());
};

function updateStatsSummary() {
  let html = stats.htmlSummary().outerHTML;
  document.getElementById("stats-summary").innerHTML = html;
}

function initSortable() {
  editableList = Sortable.create(document.getElementById("data-list"), {
  	animation: 150,
    sort: false,
  	filter: ".js-remove",
  	onFilter: evt => {
      evt.item.parentNode.removeChild(evt.item);
      stats.remove(evt.oldIndex);
      updateStatsSummary();
    }
  });
	document.getElementById("add").onclick = () => {
		Ply.dialog("prompt", {
			title: "Add",
			form: {number: ""}
		}).done(ui => {
      let n = Number(ui.data.number);
      if (n) {
        let el = document.createElement("li");
  			el.innerHTML = n + "<i class=\"js-remove\">X</i>";
        stats.add(Number(n));
  			editableList.el.appendChild(el);
      }
      updateStatsSummary();
		});
	};
}
