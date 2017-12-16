var selection = "all";
var globalJsonVar;
var on = "";
var off = "";

$.getJSON('https://gist.githubusercontent.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8/raw/e9e12f154d71cf77fc32e94e990749a7383ca2d6/Twitch%2520sample%2520API%2520responses%2520in%2520array%2520form', function(data){
	globalJsonVar = data;
	selectAll();
});



$(".col-but").on("click", function(){
	$(".streams").html("");
	$(".col-but").removeClass("reveal-but");
	$(this).addClass("reveal-but");
	selection = this.innerText;
	if(selection == "All"){
		selectAll();
	}
	if(selection == "Online"){
		selectOn();
	}
	if(selection == "Offline"){
		selectOff();
	}
});


function selectAll(){
	var len = globalJsonVar.length;
	for(var i = 0; i < globalJsonVar.length-1; i++){
		$(".streams").append("<div class='stream'></div>")
	} 
	var j = 0;
	$(".stream").each(function(){
		if(this.innerText == ""){		
			if(globalJsonVar[j].stream !== null){
				$(this).html('<a href='+globalJsonVar[j].stream.url+'><span>'+globalJsonVar[j].stream.display_name + '<img src='+globalJsonVar[j].stream.logo+'></span><p>'+globalJsonVar[j].stream.status+'</p></a>');
			} else {
				$(this).html('<span>'+globalJsonVar[j].display_name+'</span>');
			}		
		} j++;
		if($(this).text == ""){
			$(this).fadeOut();
		}
	});
}

function selectOn(){
	var len = globalJsonVar.length;
	for(var i = 0; i < globalJsonVar.length-1; i++){
		$(".streams").append("<div class='stream'></div>")
	} 
	var j = 0;
	$(".stream").each(function(){
		if(this.innerText == ""){		
			if(globalJsonVar[j].stream !== null){
				$(this).html('<a href='+globalJsonVar[j].stream.url+'><span>'+globalJsonVar[j].stream.display_name + '<img src='+globalJsonVar[j].stream.logo+'></span><p>'+globalJsonVar[j].stream.status+'</p></a>');
			} 		
		} j++;
		if(this.innerText == ""){
			$(this).remove();
		}
	});


}

function selectOff(){
	for(var i =0; i < globalJsonVar.length-1; i++){
		if(globalJsonVar[i].stream == null){
			$(".streams").append("<div class='stream'><span>"+globalJsonVar[i].display_name+"</span></div>");	
		}
		
	}
}


