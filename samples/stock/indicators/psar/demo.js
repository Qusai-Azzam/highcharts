
$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlc.json&callback=?', function (data) {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'AAPL Stock Price'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                showInLegend: true
            }
        },

        series: [{
            type: 'ohlc',
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: [
                [Date.UTC(1983, 08, 13), 10.3000, 10.3300, 10.1100, 10.1600],
                [Date.UTC(1983, 08, 14), 9.9500, 9.9800, 9.7600, 9.8000],
                [Date.UTC(1983, 08, 15), 9.7500, 9.8300, 9.6400, 9.7600],
                [Date.UTC(1983, 08, 16), 9.5500, 9.6000, 9.3500, 9.4100],
                [Date.UTC(1983, 08, 19), 9.5500, 9.8500, 9.5100, 9.8500],
                [Date.UTC(1983, 08, 20), 9.7700, 9.8000, 9.2500, 9.3300],
                [Date.UTC(1983, 08, 21), 9.0900, 9.1900, 9.0000, 9.0600],
                [Date.UTC(1983, 08, 22), 9.1600, 9.4100, 9.1600, 9.4000],
                [Date.UTC(1983, 08, 23), 9.4000, 9.4700, 9.0800, 9.2200],
                [Date.UTC(1983, 08, 26), 8.9500, 9.3200, 8.9500, 9.3100],
                [Date.UTC(1983, 08, 27), 9.6400, 9.9400, 9.5500, 9.7600],
                [Date.UTC(1983, 08, 28), 9.8300, 10.2300, 9.8300, 10.0000],
                [Date.UTC(1983, 08, 29), 10.0000, 10.1100, 9.5600, 9.5900],
                [Date.UTC(1983, 08, 30), 9.4600, 10.5000, 9.4600, 10.4000],
                [Date.UTC(1983, 09, 03), 10.8800, 11.2500, 10.8200, 11.2300],
                [Date.UTC(1983, 09, 04), 11.3000, 11.5700, 11.3000, 11.4400],
                [Date.UTC(1983, 09, 05), 11.4900, 11.5500, 11.2100, 11.4400],
                [Date.UTC(1983, 09, 06), 11.4200, 11.8000, 11.2900, 11.7800],
                [Date.UTC(1983, 09, 07), 11.7800, 11.9000, 11.6700, 11.8800],
                [Date.UTC(1983, 09, 10), 11.8500, 11.9400, 11.6200, 11.6700],
                [Date.UTC(1983, 09, 11), 11.5000, 11.5900, 11.3200, 11.3300],
                [Date.UTC(1983, 09, 12), 11.2200, 11.4300, 11.0500, 11.0500],
                [Date.UTC(1983, 09, 13), 10.9500, 11.2300, 10.8700, 11.0900],
                [Date.UTC(1983, 09, 14), 11.2200, 11.3700, 11.1100, 11.3500],
                [Date.UTC(1983, 09, 17), 11.2000, 11.3400, 11.1200, 11.2700],
                [Date.UTC(1983, 09, 18), 11.0800, 11.2700, 10.9600, 11.0000],
                [Date.UTC(1983, 09, 19), 10.8600, 10.9400, 10.7500, 10.7600],
                [Date.UTC(1983, 09, 20), 10.6800, 10.7600, 10.5300, 10.5400],
                [Date.UTC(1983, 09, 21), 10.6200, 10.6900, 10.5500, 10.6800],
                [Date.UTC(1983, 09, 24), 10.6600, 10.7800, 10.0500, 10.0900],
                [Date.UTC(1983, 09, 25), 9.9500, 10.0200, 9.7700, 9.8900],
                [Date.UTC(1983, 09, 26), 9.9500, 10.0600, 9.8200, 10.0400],
                [Date.UTC(1983, 09, 27), 9.7500, 9.8000, 9.4800, 9.6300],
                [Date.UTC(1983, 09, 28), 9.6800, 9.7500, 9.6400, 9.6600],
                [Date.UTC(1983, 09, 31), 9.4200, 9.5000, 9.3300, 9.3600],
                [Date.UTC(1983, 10, 01), 9.2800, 9.3900, 9.1300, 9.3700],
                [Date.UTC(1983, 10, 02), 9.4000, 9.5400, 9.0600, 9.1000],
                [Date.UTC(1983, 10, 03), 8.9700, 9.4500, 8.9700, 9.4300],
                [Date.UTC(1983, 10, 04), 9.3700, 9.6500, 9.2700, 9.5200],
                [Date.UTC(1983, 10, 07), 9.7800, 9.9600,9.7600, 9.8100],
                [Date.UTC(1983, 10, 08), 9.9600, 10.0200, 9.8700, 9.9100],
                [Date.UTC(1983, 10, 09), 9.6500, 9.8200, 9.6200, 9.7600],
                [Date.UTC(1983, 10, 10), 9.6600, 10.0800, 9.6600, 9.9600],
                [Date.UTC(1983, 10, 11), 9.9800, 10.0400, 9.2500, 9.2600],
                [Date.UTC(1983, 10, 14), 9.1300, 9.4000, 9.1300, 9.4000],
                [Date.UTC(1983, 10, 15), 9.3000, 9.4700, 9.2000, 9.2200],
                [Date.UTC(1983, 10, 16), 9.1900, 9.3400, 9.1200, 9.2000],
                [Date.UTC(1983, 10, 17), 9.0500, 9.4000, 8.8200, 9.3700],
                [Date.UTC(1983, 10, 18), 9.3200, 9.4500, 9.2800, 9.3500],
                [Date.UTC(1983, 10, 21), 9.2700, 10.1000, 9.2700, 10.0800]
            ]
        }, {
            type: 'psar',
            linkedTo: 'aapl',
            params:{
                index: 4
            }
        }]
    });
});