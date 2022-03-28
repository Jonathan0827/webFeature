var dday = new Date("April 2, 2022, 00:00:01").getTime();

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
		).innerHTML = `격리 해제까지 ${d}일 ${h}시간 ${m}분 ${s}초 남았습니다.`;
	}
}, 1);
