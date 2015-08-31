//JS For Bar Graph
var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};

	var barChartData = {
		labels : ["SUN","MON","TUE","WED","THI","FRI","SAT"],
		datasets : [
			{
				fillColor : "#5FC29E",
				strokeColor : "#074833",
				highlightFill: "#228061",
				highlightStroke: "#5FC29E",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]

	}
	
	
var doughnutData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "APPLICANT"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "INTERVIEWS"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "FORWARDS"
				}
				

			];
			window.onload = function(){
				var ctx = document.getElementById("canvas").getContext("2d");
				window.myBar = new Chart(ctx).Bar(barChartData, {
					responsive : true
				});
				var ctx = document.getElementById("chart-area").getContext("2d");
				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
			}
			