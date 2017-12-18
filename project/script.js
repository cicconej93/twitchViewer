
var globalJsonVar = [];
var globalJsonChan = [];
var selection = "";

var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


getData();
setTimeout(function() {selectAll(); }, 1000);


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
	console.log(globalJsonVar);
	for(var i = 0; i < globalJsonVar.length; i++){
		if(globalJsonVar[i].stream == null){
			$(".streams").append("<div class='stream'><span>"+streamers[i]+"</span></div>");
		} else {
			$(".streams").append("<div class='stream'><a href="+globalJsonVar[i].stream.channel.url+"><span>"+globalJsonVar[i].stream.channel.display_name+" <img src="+globalJsonVar[i].stream.channel.logo+"></span><p>"+globalJsonVar[i].stream.channel.game+"</p></a></div>");
		}
	}
}

function selectOn(){
	for(var i = 0; i < globalJsonVar.length; i++){
		if(globalJsonVar[i].stream !== null){
			$(".streams").append("<div class='stream'><a href="+globalJsonVar[i].stream.channel.url+"><span>"+globalJsonVar[i].stream.channel.display_name+" <img src="+globalJsonVar[i].stream.channel.logo+"></span><p>"+globalJsonVar[i].stream.channel.game+"</p></a></div>");
		} 
	}
}

function selectOff(){
	for(var i =0; i < globalJsonVar.length; i++){
		if(globalJsonVar[i].stream == null){
			$(".streams").append("<div class='stream'><span>"+streamers[i]+"</span></div>");	
		}
		
	}
}

function getData(){
	for(var i = 0; i < streamers.length; i++){
		$.ajax({url:'https://wind-bow.glitch.me/twitch-api/streams/'+streamers[i]+'', async: false, success: function(data){
			globalJsonVar = globalJsonVar.concat(data); 	
		}});

	} 
}




