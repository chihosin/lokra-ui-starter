import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import LinearTickOptions = Chart.LinearTickOptions;
import ChartOptions = Chart.ChartOptions;
import ChartData = Chart.ChartData;

@Component({
  selector: 'lk-widget',
  templateUrl: './widgets.component.html',
  styleUrls: [
    './widgets.component.scss'
  ]
})
export class WidgetsComponent implements OnInit {

  chartLineMock: any = ChartJsLineMock;
  chartDountMock: any = ChartJSDountMock.donutChart;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Widgets';
  }

  ngOnInit() {
  }

}

// Mock Data
class ChartJsLineMock {
  static type: string = 'line';
  static data: ChartData = {
    labels: new Array<String>(5),
    datasets: [
      {
        fill: true,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        spanGaps: true,
        backgroundColor: 'rgba(255,128,128,0.4)',
        borderColor: 'rgba(255,0,0,0.0)',
        data: [50, 3, 55, 30, 65]
      },
      {
        fill: true,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        spanGaps: true,
        backgroundColor: 'rgba(255,128,0,0.3)',
        borderColor: 'rgba(255,0,0,0.0)',
        data: [20, 50, 35, 50, 25]
      }
    ]
  };
  static tick: LinearTickOptions = {
    max: 100,
    min: 0,
    stepSize: 1
  };
  static options: ChartOptions = {
    animation: false,
    responsive: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          autoSkip: true,
        }
      }],
      yAxes: [{
        display: false,
        ticks: ChartJsLineMock.tick
      }]
    }
  };
}

export class ChartJSDountMock {
  static donutChart = {
    type: 'doughnut',
    data: {
      labels: [
        'red',
        'blue',
        'yellow'
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            'rgba(255,128,128,0.3)',
            'rgba(255,128,128,0.5)',
            'rgba(255,128,128,0.7)'
          ],
          hoverBackgroundColor: [
            'rgba(255,128,128,0.3)',
            'rgba(255,128,128,0.5)',
            'rgba(255,128,128,0.7)'
          ]
        }]
    },
    options: {
      animation: false,
      responsive: false,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false
      }
    }
  };
}
