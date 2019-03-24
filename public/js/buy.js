function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName("Head-card");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////


window.onload = function () {

var chart_tomato = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Trend Year 2018"
	},
	axisX: {
		labelFontSize: 20,
        suffix: "Rank"
	},
	axisY: {
		title: "Price",
		includeZero: false,
		suffix: "Beds"
	},
	legend:{
		cursor: "pointer",
		fontSize: 16,
		itemclick: toggleDataSeries
	},
	toolTip:{
		shared: true
	},
	data: [{
		name: "Single Bed",
		type: "spline",
		yValueFormatString: "#0 beds",
		showInLegend: true,
		dataPoints: [
			{ x: 100, y: 120 },
			{ x: 200, y: 110 },
			{ x: 300, y: 100 },
			{ x: 400, y: 80 },
			{ x: 500, y: 75 },
			{ x: 600, y: 54 },
			{ x: 700, y: 40 }
		]
	},
	{
		name: "Double Bed",
		type: "spline",
		yValueFormatString: "#0.## INR",
		showInLegend: true,
		dataPoints: [
			{ x: 100, y: 350 },
			{ x: 200, y: 300 },
			{ x: 300, y: 220 },
			{ x: 400, y: 140 },
			{ x: 500, y: 60 },
			{ x: 600, y: 0 },
			{ x: 700, y: 0 }
		]
	},
	{
		name: "Tripple bed",
		type: "spline",
		yValueFormatString: "#0.## INR",
		showInLegend: true,
		dataPoints: [
			{ x: 100, y: 300 },
			{ x: 200, y: 210 },
			{ x: 300, y: 150 },
			{ x: 400, y: 60 },
			{ x: 500, y: 15 },
			{ x: 600, y: 0 },
			{ x: 700, y: 0 }
		]
	}]
});
    
chart_tomato.render();

function toggleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else{
		e.dataSeries.visible = true;
	}
	chart_tomato.render();
}

}