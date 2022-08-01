$(() => {
	$(window).on("scroll", function () {
		if ($(window).scrollTop()) {
			$("nav").addClass("black");
		} else {
			$("nav").removeClass("black");
		}
	});
	$("#resumes").mouseover(function () {
		$(".hide-ul").slideDown();
	});
	$("#resumes").mouseleave(function () {
		$(".hide-ul").hide(100);
	});
});
