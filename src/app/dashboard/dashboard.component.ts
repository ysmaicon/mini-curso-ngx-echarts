import { Component, OnInit } from '@angular/core';
import { GraphQLService } from '../graphql/graphql.service';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private service: GraphQLService,
  ) { }

  ngOnInit(): void {
  }

}
