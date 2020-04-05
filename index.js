var beepThree = $("#beep-three")[0];
$("#nav-three a")
	.mouseenter(function() {
		beepThree.pause();
		beepThree.play();
	});
	
	
	
	
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};