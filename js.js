$(document).ready(function() {  
	  
	$("#submit").click(function() {
	   var amount = $("#amount").val();
	   var aNumb = Number(amount);
	   document.cookie = "amount" + "=" + amount;
	   var flavor = $("#flavor").val();
	   document.cookie = "flavor" + "=" + flavor;
	});
	
});

 