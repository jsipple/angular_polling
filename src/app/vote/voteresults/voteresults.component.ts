import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voteresults',
  templateUrl: './voteresults.component.html',
  styleUrls: ['./voteresults.component.css']
})
export class VoteresultsComponent implements OnInit {
  public barChartData = [
    {data: [65, 34, 89, 26], label: 'Who will win the NBA Championship?'}
  ]
  public barChartLabels = [
    'Warriors', 'Blazers', 'Bucks', 'Raptors'
  ];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  public barChartLegend = true;
  public barChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  displayBar() {
    this.barChartType = 'bar';
  }

  displayPie() {
    this.barChartType = 'pie';
  }

  displayDoughnut() {
    this.barChartType = 'doughnut';
  }

}
