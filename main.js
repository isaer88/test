window.addEventListener("load", init, false);

var started = false,
	canvas,
	context;

function init(){
	canvas = document.getElementById ("canvas");
    context = canvas.getContext ("2d");

    canvas.addEventListener("mousemove", mousemoveHandler, false);
}

function mousemoveHandler(e){
	var x, y;

	if (e.layerX || e.layerY == 0) {
		x = e.layerX;
		x = e.layerY;
	}else if (e.offsetX || e.offsetY == 0) {
		x = e.offsetX;
		x = e.offsetY;
	}

	if(!started){
		context.beginPath();
		context.moveTo(x, y);
		started.stroke();
	} else {
		context.lineTo(x. y);
		context.stroke();
	}
}

/*
function draw () {
    if (!Modernizr.canvas) return;

    var canvas = document.getElementById ("canvas");
    var context = canvas.getContext ("2d");


   	context.moveTo(0, 100);


   	context.bezierCurveTo(10,10,40,10,100,100);

   	// стили
   	context.lineWidth = 4;
   	context.strokeStyle = "green";
   	context.stroke();

}

if (window.addEventListener)
   	window.addEventListener ("load", draw, true);
*/