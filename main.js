document.querySelector("body").dataset.mode = "day";

var cmode = document.querySelector("body").dataset.mode;
var workers = {
	cleaner: "clean",
	designer: "design",
};
for (var key in workers) {
	document.write(key + ":" + workers[key] + "<br>");
}
function colorScheme(i) {
	if (cmode === "day") {
		document.querySelector("body").style.backgroundColor = "black";
		document.querySelector("body").style.color = "white";
		document.querySelector("a").style.color = "white";
		document.querySelector("body").dataset.mode = "night";
		cmode = "night";
		i.value = "day";
	} else {
		document.querySelector("body").style.backgroundColor = "white";
		document.querySelector("body").style.color = "black";
		document.querySelector("body").dataset.mode = "day";
		document.querySelector("a").style.color = "black";
		cmode = "day";
		i.value = "night";
	}
}
