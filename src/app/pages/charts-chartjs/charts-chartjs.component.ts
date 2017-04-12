import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-charts-chartjs',
  templateUrl: './charts-chartjs.component.html',
  styleUrls: [
    './charts-chartjs.component.scss'
  ]
})
export class ChartsChartjsComponent implements OnInit {

  mock: any = ChartMock;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Chart.js';
  }

  ngOnInit() {
  }

}


class ChartMock {
  static line = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        borderColor: '#009688',
        backgroundColor: 'rgba(0, 150, 136, 0.5)',
        data: [ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(),
          ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(),
          ChartMock.randomScalingFactor()]
      }, {
        label: 'My Second dataset',
        borderColor: '#ffc107',
        backgroundColor: 'rgba(255, 193, 7, 0.5)',
        data: [ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(),
          ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(),
          ChartMock.randomScalingFactor()]
      }]
    }
  };

  static bar = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Credit',
        borderColor: '#009688',
        backgroundColor: 'rgba(0, 150, 136, 0.5)',
        data: [ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(),
          ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(),
          ChartMock.randomScalingFactor()]
      }, {
        label: 'Debit',
        borderColor: '#ffc107',
        backgroundColor: 'rgba(255, 193, 7, 0.5)',
        data: [ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(),
          ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(), ChartMock.randomScalingFactor(),
          ChartMock.randomScalingFactor()]
      }]
    },
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderColor: 'rgb(0, 255, 0)',
          borderSkipped: 'bottom'
        }
      },
    }
  };

  static radar = {
    type: 'radar',
    data: {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'First Year',
          borderColor: '#009688',
          backgroundColor: 'rgba(0, 150, 136, 0.5)',
          pointBackgroundColor: '#009688',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#009688',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'Second Year',
          borderColor: '#ffc107',
          backgroundColor: 'rgba(255, 193, 7, 0.5)',
          pointBackgroundColor: '#ffc107',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#ffc107',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    }
  };

  static polarArea = {
    type: 'polarArea',
    data: {
      datasets: [{
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'red',
          'green',
          'yellow',
          'grey',
          'blue'
        ],
        label: 'My dataset'
      }],
      labels: [
        'red',
        'green',
        'yellow',
        'grey',
        'blue'
      ]
    }
  };

  static pieChart = {
    type: 'pie',
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
            'red',
            'blue',
            'yellow'
          ],
          hoverBackgroundColor: [
            'red',
            'blue',
            'yellow'
          ]
        }]
    }
  };


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
            'red',
            'blue',
            'yellow'
          ],
          hoverBackgroundColor: [
            'red',
            'blue',
            'yellow'
          ]
        }]
    }
  };

  static randomScalingFactor() {
    return Math.round(Math.random() * 100);
  };
}
