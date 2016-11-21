$(document).ready(function() {
	$(".button").hover(function() {
		$(this).stop().animate({backgroundColor: "#666"}, 100);
	},function() {
		$(this).stop().animate({backgroundColor: "#333"}, 100);
	});
	// $(".button").mousedown(function() {
	// 	$(this).animate({marginTop: "155px", borderBottom: "0"}, 100);
	// });
	// $(".button").mouseup(function() {
	// 	$(this).animate({marginTop: "150px", borderBottom: "5px solid #000"}, 100);
	//  });
});
var butt = document.getElementById('butt');
	butt.onmousedown = function(){
		butt.style.marginTop = "155px";
		butt.style.borderBottom = "0";
		butt.style.borderRight = "0";
	}
	butt.onmouseup = function(){
		butt.style.marginTop = "150px";
		butt.style.borderBottom = "5px solid #000";
		butt.style.borderRight = "3px solid #000";
	}