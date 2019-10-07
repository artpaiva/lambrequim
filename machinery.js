var baldachin;
var sticky;
window.onload = function () {
	// document.body.scrollTo(0, 0);
	setBrand();
	window.onresize = function() {setBrand()};
	window.onscroll = function() {checkSticky()};

	baldachin = document.getElementById("baldachin-wrap");
	// document.documentElement.scrollTo(0, 0);
	sticky = document.getElementById('marquee').offsetHeight;
}


function setBrand() {
	if(window.innerWidth <= 480)
		document.getElementById('baldachinBrand').innerHTML = 'L';
	else
		document.getElementById('baldachinBrand').innerHTML = 'Lambrequins';
}

function checkSticky() {
	// console.log(`Scroll: ${window.scrollY}, Baldachin:${sticky}`);
	if (window.scrollY >= sticky) {
		// console.log('sticky');
		baldachin.classList.add("sticky");
	} else {
		// console.log('not sticky');
		baldachin.classList.remove("sticky");
	}
}
function turnSearch(ele) {
	ele.classList.toggle("active");
	if(ele.classList.contains("active")) {
		document.getElementById('baldachinSearch').focus();
	}
}
function turnTorsoPanel(ele) {
	ele.classList.toggle("active");
}
function toTop(){
	document.body.scrollTo(0, 0);
}
