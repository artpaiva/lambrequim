var baldachin;
var sticky;
window.onload = function () {
    window.onscroll = function() {checkSticky()};

    baldachin = document.getElementById("baldachin-wrap");
    document.documentElement.scrollTo(0, 0);
    sticky = baldachin.offsetTop - document.body.scrollTop;
}


function checkSticky() {
  if (window.pageYOffset >= sticky) {
    // console.log('sticky');
    baldachin.classList.add("sticky");
  } else {
    console.log('not sticky');
    baldachin.classList.remove("sticky");
  }
}
function turnSearch(ele) {
    ele.classList.toggle("active");
    if(ele.classList.contains("active")) {
        document.getElementById('baldachinSearch').focus();
    }
}
function toTop(){
    console.log('aqui');
    document.body.scrollTo(0, 0);
}
