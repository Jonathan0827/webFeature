var dday = new Date("Febuary 7, 2022, 8:30:00").getTime();

setInterval(function () {
	var today = new Date().getTime();
	var gap = dday - today;
	var d = Math.ceil(gap / (1000 * 60 * 60 * 24) - 1);
	var h = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1);
	var m = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60) - 1);
	var s = Math.ceil((gap % (1000 * 60)) / 1000 - 1);
	if (gap <= 0) {
		document.getElementById("count").innerHTML = "개학했습니다.";
	} else {
		document.getElementById(
			"count"
		).innerHTML = `개학까지 ${d}일 ${h}시간 ${m}분 ${s}초 남았습니다.`;
	}
}, 1000);
