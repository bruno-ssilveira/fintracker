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

        // --- EIXO X ---
        var xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "category",
                renderer: am5xy.AxisRendererX.new(root, {
                  // Para garantir que o grid vertical apareça
                  // mesmo sem linhas no eixo X
                  cellStartLocation: 0.1,
                  cellEndLocation: 0.9
                }),
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        xAxis.get("renderer").labels.template.setAll({
            fill: am5.color(0x9E9E9E),
            fontSize: 14
        });

        // Altera a cor das linhas do grid VERTICAL
        xAxis.get("renderer").grid.template.setAll({
            stroke: am5.color(0xffffff),
            strokeOpacity: 0.2
        });


        // --- EIXO Y ---
        var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        yAxis.get("renderer").labels.template.setAll({
            fill: am5.color(0x9E9E9E)
        });

        // Altera a cor das linhas do grid HORIZONTAL
        yAxis.get("renderer").grid.template.setAll({
            stroke: am5.color(0xffffff),
            strokeOpacity: 0.2
        });


        // --- SÉRIE DE COLUNAS ---
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
            { category: "A", value: 40 },
            { category: "B", value: 55 },
            { category: "C", value: 70 },
            { category: "D", value: 60 }
        ];

        xAxis.data.setAll(data);
        series.data.setAll(data);


        
        series.bullets.push(function (root, series, dataItem) {
            return am5.Bullet.new(root, {
                locationY: 1,
                sprite: am5.Label.new(root, {
                    text: dataItem.get("valueY").toString() + " btc",
                    fill: am5.color(0xffffff),
                    centerX: am5.p50,
                    centerY: am5.p100,
                    dy: -10
                })
            });
        });

        // Animate on load
        series.appear(1000);
        chart.appear(1000, 100);
    });
}