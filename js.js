$(document).ready(function() {  

	$(".sign > p").fadeTo(3000, 1);

    var originalSign = $(".sign p");

	$("#button").click(function(e) {
		e.preventDefault();
		var type = $("#type").val();
		var flavor = $("#flavor").val();
	   
	    if ($("div.show").is(":visible")) {
       		$(".show").hide();
        } 

	    if (type === "regular" && flavor === "sugar") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
				$("#regsugar").css("display", "block");
	   		});

	    } else if (type === "regular" && flavor === "lemon") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
	   			$("#reglemon").css("display", "block");
	    	});
	   
	    } else if (type === "regular" && flavor === "chocolate") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
	   			$("#regchocolate").css("display", "block");
	   		});
	  
	    } else if (type === "vegan" && flavor === "sugar") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
	   			$("#vegansugar").css("display", "block");
	   		});
	   
	    } else if (type === "vegan" && flavor === "lemon") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
	   			$("#veganlemon").css("display", "block");
	   		});
	   
	    } else if (type === "vegan" && flavor === "chocolate") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
	   			$("#veganchocolate").css("display", "block");
	   		});
	   
	    } else if (type === "glutenfree" && flavor === "sugar") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
	   			$("#gfsugar").css("display", "block");
	   		});
	   
	    } else if (type === "glutenfree" && flavor === "lemon") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
	   			$("#gflemon").css("display", "block");
	   		});
	   
	    } else if (type === "glutenfree" && flavor === "chocolate") {
	   		$(".sign").html("<p class='newElement'>Good luck!!!</p>");
	   		$("#bear").fadeOut(1400, function() {
	   			$("#gfchocolate").css("display", "block");
	   		});
	    };
	});

    $("#reset").click(function(e) {
	   e.preventDefault();
	   $("div.show").css("display", "none");
	   $(".sign p").replaceWith(originalSign);
	   // $("div.show").hide(10, function(){
	   $("#bear").fadeIn(1700, function() {
	    // });
	   });
    });
});
	
	


 