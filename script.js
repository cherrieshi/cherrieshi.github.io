$(document).ready(function(){
    var show=false;
    $("#lightning").hide();
    $("#pika").click(function(){
        if(show===true){
			$("#lightning").hide();
        } else{
        	$("#lightning").show();
		$("#pika").hide();
        } 
        show=!show
        console.log("hello")
    });
});
