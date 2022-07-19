
// occupancy rate chart
var occupancy_rate = {
    colors: ["#3346D3", "#F99C4E"],
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};
new ApexCharts(document.querySelector("#spline_area_chart"), occupancy_rate).render();

// repeat customer chart
var repeat_customer = {
    colors: ["#3346D3", "#F99C4E", "#F94F58"],
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};
new ApexCharts(document.querySelector("#basic_column_chart"), repeat_customer).render();

// revenue room chart
var revenue_room = {
    colors: ["#3346D3", "#F99C4E", "#F94F58"],
    series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43, 21, 49],
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
            '2012 Q3', '2012 Q4'
        ],
    },
    fill: {
        opacity: 1
    },
    legend: {
        showForSingleSeries: true,
        show: '1',
        position: 'bottom',
        horizontalAlign: 'center',
    },
};
new ApexCharts(document.querySelector("#stacked_column_chart"), revenue_room).render();

// ordering breakdown
var ordering_breakdown = {
    series: [44, 55, 41, 17],
    labels: ['Total orders', 'Dine ins', 'Trouble', 'Others'],
    legend: {
        showForSingleSeries: true,
        show: '1',
        position: 'bottom',
        horizontalAlign: 'center',
    },
    colors: ["#000", "#3346D3", "#F99C4E", "#F94F58"],
    chart: {
        type: 'donut',
    },
    responsive: [{
         breakpoint: 480,
        options: {
            chart: {
                width: '100%'
            },
        }
    }]
};
new ApexCharts(document.querySelector("#simple_donut_chart"), ordering_breakdown).render();

// Booking Source
var booking_source = {
    series: [44, 55, 41, 17],
    labels: ['Online', 'Direct', 'Friend', 'Phone'],
    colors: ["#000", "#3346D3", "#F99C4E", "#F94F58"],
    legend: {
        showForSingleSeries: true,
        show: '1',
        position: 'bottom',
        horizontalAlign: 'center',
    },
    chart: {
        type: 'pie',
    },
    responsive: [{
        // breakpoint: 480,
        options: {
            chart: {
                width: '100%'
            },
        }
    }]
};
new ApexCharts(document.querySelector("#simple_pie_chart"), booking_source).render();