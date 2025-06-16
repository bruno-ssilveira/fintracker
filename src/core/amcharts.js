export default function amcharts() {
	am5.ready(function () {
		// Create root element
		var root = am5.Root.new("chartdiv");

		// Set themes
		root.setThemes([
			am5themes_Animated.new(root)
		]);

		// Create chart
		var chart = root.container.children.push(
			am5xy.XYChart.new(root, {
			panX: true,
			panY: true,
			wheelX: "panX",
			wheelY: "zoomX",
			pinchZoomX: true
			})
		);

		// Create axes
		var xAxis = chart.xAxes.push(
			am5xy.CategoryAxis.new(root, {
				categoryField: "category",
				renderer: am5xy.AxisRendererX.new(root, {}),
				tooltip: am5.Tooltip.new(root, {})
			})
		);

		// Muda a cor dos números do eixo X
		xAxis.get("renderer").labels.template.setAll({
		fill: am5.color(0x9E9E9E), // cinza claro
		fontSize: 14
		});

		// Muda a cor das linhas da grade do eixo X
		xAxis.get("renderer").grid.template.setAll({
		stroke: am5.color(0xBDBDBD), // cor da linha da grade
		strokeWidth: 1,
		strokeOpacity: 0.5
		});

		var yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {renderer: am5xy.AxisRendererY.new(root, {})})
		);

		// Create series
		var series = chart.series.push(
			am5xy.ColumnSeries.new(root, {
			name: "Series 1",
			xAxis: xAxis,
			yAxis: yAxis,
			valueYField: "value",
			categoryXField: "category",
			tooltip: am5.Tooltip.new(root, {
				labelText: "{valueY}"
			})
			})
		);

		// Add data
		var data = [
			{
			category: "A",
			value: 40
			},
			{
			category: "B",
			value: 55
			},
			{
			category: "C",
			value: 70
			},
			{
			category: "D",
			value: 60
			}
		];

		xAxis.data.setAll(data);
		series.data.setAll(data);

		// Animate on load
		series.appear(1000);
		chart.appear(1000, 100);
	});
}