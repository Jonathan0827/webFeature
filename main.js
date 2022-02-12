document.querySelector("body").dataset.mode = "day";

var cmode = document.querySelector("body").dataset.mode;
function colorScheme(i) {
	if (cmode === "day") {
		document.querySelector("body").style.backgroundColor = "black";
		document.querySelector("body").style.color = "white";
		document.querySelector("body").dataset.mode = "night";
		cmode = "night";
		i.value = "day";
	} else {
		document.querySelector("body").style.backgroundColor = "white";
		document.querySelector("body").style.color = "black";
		document.querySelector("body").dataset.mode = "day";
		cmode = "day";
		i.value = "night";
	}
}
