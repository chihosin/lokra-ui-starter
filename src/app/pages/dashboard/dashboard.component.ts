import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';
import { MdDialog } from '@angular/material';
import { DialogThemeComponent } from '../../shared/dialog/dialog-theme/dialog-theme.component';
import ChartData = Chart.ChartData;

@Component({
  selector: 'lk-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  chartMockLength = 20;
  clusterLoadDataL0 = this.createChartDataArray(this.chartMockLength, true);
  clusterLoadDataL1 = this.createChartDataArray(this.chartMockLength, true);
  clusterLoadDataL2 = this.createChartDataArray(this.chartMockLength, true);
  clusterLoadChartData = {
    labels: new Array<String>(this.chartMockLength),
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
        backgroundColor: 'rgba(0, 150, 136,,0.4)',
        borderColor: 'transparent',
        data: this.clusterLoadDataL0
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
        backgroundColor: 'rgba(0, 150, 136,0.3)',
        borderColor: 'transparent',
        data: this.clusterLoadDataL1
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
        backgroundColor: 'rgba(0, 150, 136,0.2)',
        borderColor: 'transparent',
        data: this.clusterLoadDataL2
      }
    ]
  };
  clusterLoadChartType = 'line';
  clusterLoadChartOptions = {
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
        ticks: {
          max: 100,
          min: 0,
          stepSize: 1
        }
      }]
    }
  };
  clusterLoadChartSyncData = [];
  storageChart = ChartJSDountMock.donutChart;
  parjectChart = ChartJsTableLineMock;

  constructor(private appService: AppService, privateelementRef: ElementRef, private dialog: MdDialog,) {
    appService.getState().topnavTitle = 'Dashboard';
    appService.getState().pageFooter = true;
    setInterval(() => {
      this.changeChartData();
    }, 800);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.appService.getState().pageFooter = false;
  }

  ngAfterViewInit() {
    if (!this.appService.getState().initial) {
      this.dialog.open(DialogThemeComponent);
      this.appService.getState().initial = true;
    }
  }

  changeChartData() {
    this.clusterLoadDataL0.shift();
    this.clusterLoadDataL0.push(Math.random() * 10 + 30);
    this.clusterLoadDataL1.shift();
    this.clusterLoadDataL1.push(Math.random() * 10 + 60);
    this.clusterLoadDataL2.shift();
    this.clusterLoadDataL2.push(Math.random() * 10 + 80);
    this.clusterLoadChartSyncData = [
      this.clusterLoadDataL0,
      this.clusterLoadDataL1,
      this.clusterLoadDataL2
    ];
  }

  createChartDataArray(length: number, ramdom: boolean): Array < number > {
    let arr = [];
    for (let index = 0; index < length; index++)
      if (ramdom)
        arr.push(Math.random() * 100);
      else
        arr.push(0);
    return arr;
  }
}

// Mock Data
class ChartJsTableLineMock {
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
        backgroundColor: 'rgba(0, 150, 136,0.4)',
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
        backgroundColor: 'rgba(0, 150, 136,0.3)',
        borderColor: 'rgba(255,0,0,0.0)',
        data: [20, 50, 35, 50, 25]
      }
    ]
  };
  static options: any = {
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
        ticks: {
          max: 100,
          min: 0,
          stepSize: 1
        }
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
            'rgba(0, 150, 136,0.3)',
            'rgba(0, 150, 136,0.5)',
            'rgba(0, 150, 136,0.7)'
          ],
          hoverBackgroundColor: [
            'rgba(0, 150, 136,0.4)',
            'rgba(0, 150, 136,0.6)',
            'rgba(0, 150, 136,0.8)'
          ],
          borderColor: 'rgba(255,0,0,0.0)'
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
