var selection = "all";

$(".col-but").on("click", function(){
	$(".col-but").removeClass("reveal-but");
	$(this).addClass("reveal-but");
	selection = this.innerText;
	console.log(selection);
});

