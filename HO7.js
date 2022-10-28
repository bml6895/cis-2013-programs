
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	
	alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triangleArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	trianglePerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + " and the circumference is " + circleCircum(floatRadius));
};


var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
};

var calcCircleArea = function()
{
	var floatRadius = parseFloat($("radius").value);
	alert ("The Circle area is " + circleArea(floatRadius));
};

function circleArea(floatRadius)
{
	var floatCircleArea = parseFloat (Math.PI * (floatRadius*floatRadius));
	return floatCircleArea.toFixed(2);
};

var calcRectArea = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The rectangle area is " + rectArea(floatRectWidth, floatRectHeight));	
};

function rectArea(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectArea = floatRectWidth_par * floatRectHeight_par;
    return floatRectArea.toFixed(2);
};

var calcRectPerim = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The rectangle perimeter is " + rectPerim(floatRectWidth, floatRectHeight));	
};

function rectPerim(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectPerim = 2 * floatRectWidth_par + 2 * floatRectHeight_par;
    return floatRectPerim.toFixed(2);
};





var calcTriangleArea = function()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	alert ("The Triangle area is " + triangleArea(floatTriSide1,floatTriSide2,floatTriSide3));
};

function triangleArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
	var floatS = (floatTriSide1_par + floatTriSide2_par + floatTriSide3_par)/2;
	var floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1_par)*(floatS-floatTriSide2_par)*(floatS-floatTriSide3_par)));
	return floatTriangleArea.toFixed(2);
};




var calcTrianglePerim = function()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	alert ("The Triangle Perimeter is " + trianglePerim(floatTriSide1,floatTriSide2,floatTriSide3));
};

function trianglePerim(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
	var floatTrianglePerim = parseFloat((floatTriSide1_par) + (floatTriSide2_par) + (floatTriSide3_par));
	return floatTrianglePerim.toFixed(2);
};


window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
	$("calc_circle_area").onclick = calcCircleArea;
	$("calc_rect_area").onclick = calcRectArea;
	$("calc_rect_perim").onclick = calcRectPerim;
	$("calc_tri_perim").onclick = calcTrianglePerim;
	$("calc_tri_area").onclick = calcTriangleArea;
};