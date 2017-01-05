/*jshint esversion: 6 */
const CHART = document.getElementById("barChart");

Chart.defaults.global.animation.duration = 1000;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.scale.gridLines.display = false;

let barChart = new Chart(CHART, {
    type: 'bar',
    data: {
        labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: "Data Growth",
            borderColor: "#A7E256",
            backgroundColor: "#A7E256",
            hoverBackgroundColor: "rgb(44, 129, 156)",
            hoverBorderColor: "rgb(44, 129, 156)",
            borderWidth: 1,
            data: [0.125, 0.25, 0.25, 0.375, 0.875, 1.125, 2.25, 3.25, 4, 6.125, 10.625, 14.75, 20.125, 30, 40]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "ZB (1ZB = 1,000,000,000 GB)"
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Year"
                }
            }]
        }
    }
});
