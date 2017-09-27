$(document).ready(function() {
	var click=0;


	$("#sPlayers").hide()
	
	$("button").hover(function(){
		$("#arena").addClass($(this).attr("id"))	
	},function(){
		if(click===0){

			$("#arena").removeClass($(this).attr("id"))
		}
	})


	$("button").click(function () {
		click=click+1;
		$("#sArena").hide()
		$("#arena").addClass($(this).attr("id"))
			
		$("#sPlayers").show()
	
	})

	$("#player1").click(function () {
		$("#sPlayers").removeClass("center");
		$("#sPlayers").addClass("top");
		$("#left").attr("src", $("#player1").val());
	})
	$("#player2").click(function () {
		$("#right").attr("src", $("#player2").val());
	})


});