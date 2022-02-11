var dday = new Date("Febuary 17, 2022, 00:00:00").getTime();

setInterval(function () {
	var today = new Date().getTime();
	var gap = dday - today;
	var h = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1);
	var m = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60) - 1);
	var s = Math.ceil((gap % (1000 * 60)) / 1000 - 1);
	if (gap <= 0) {
		document.getElementById("count").innerHTML = "생일입니다.";
	} else {
		document.getElementById(
			"count"
		).innerHTML = `생일까지 ${h}시간 ${m}분 ${s}초 남았습니다.`;
	}
}, 1000);
