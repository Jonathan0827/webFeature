var dday = new Date("February 07, 2022, 8:30:00").getTime();

setInterval(function () {
	var today = new Date().getTime();
	var gap = dday - today;
	var d = Math.ceil(gap / (1000 * 60 * 60 * 24));
	var h = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var m = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
	var s = Math.ceil((gap % (1000 * 60)) / 1000);

	document.getElementById("count").innerHTML =
		"개학까지 " +
		d +
		"일 " +
		h +
		"시간 " +
		m +
		"분 " +
		s +
		"초 남았습니다.";
}, 1000);
