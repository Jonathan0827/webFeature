var dday = new Date("March 9, 2022, 00:03:00").getTime();

setInterval(function () {
	var today = new Date().getTime();
	var gap = dday - today;
	var d = Math.floor(gap / (1000 * 60 * 60 * 24));
	var h = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1);
	var m = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60) - 1);
	var s = Math.ceil((gap % (1000 * 60)) / 1000 - 1);
	if (gap <= 0) {
		document.getElementById("count").innerHTML = "";
	} else {
		document.getElementById(
			"count"
		).innerHTML = `Apple Peek Performance까지 ${d}일 ${h}시간 ${m}분 ${s}초 남았습니다.`;
	}
}, 1000);
