var playerData;

$(document).ready(function() {
    $('.chart').click(function(){
    	$(this).toggleClass('blue')
    })
    getData();
});

function getData() {
	console.log('is this thing on?');
	$.getJSON("js/dumontier_brettgardner.json",function(data){
		playerData = data;
		drawStuff();
	});

}


function drawStuff() {
	$(".chart").html(playerData.name);

	$(".chart").append("<br> Club: " + playerData.club);

	$.each(playerData.stats, function(i, item) {
		$(".chart").append("<p>" + item.year +" batting average: " + item.AVG + "<p>");
	})
}


