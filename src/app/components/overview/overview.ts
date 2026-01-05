import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.services';
import { Observable, map } from 'rxjs';
import * as echarts from 'echarts';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit, AfterViewInit {
  popularRepos$: Observable<any> | undefined;
  totalContribution: number = 0;
  private heatmapData: any[][] = []; // Our Single Source of Truth
  private myChart: echarts.ECharts | undefined;
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.heatmapData = this.generateDummyData();

    this.popularRepos$ = this.githubService
      .getrepos()
      .pipe(
        map((repos) =>
          repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count).slice(0, 6)
        )
      );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initChart();
    }, 500);
  }

  private generateDummyData(): any[][] {
    const data: any[][] = [];
    const start = new Date('2025-01-01');
    const end = new Date('2025-12-31');
    let runningSum = 0;

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      // Randomly assign activity levels (0 to 10)
      // Most days have 0-2, some have high peaks
      const count =
        Math.random() > 0.7 ? Math.floor(Math.random() * 12) : Math.floor(Math.random() * 3);
      runningSum += count;
      data.push([dateStr, count]);
    }
    // console.log("Testing Random Data ",data)
    this.totalContribution = runningSum;
    return data;
  }

  private initChart() {
    const chartDom = document.getElementById('contribution-chart');
    if (chartDom) {
      echarts.dispose(chartDom);

      const myChart = echarts.init(chartDom);

      const option = {
        tooltip: {
          position: 'top',
          formatter: (p: any) => `${p.data[1]} contributions on ${p.data[0]}`,
        },
        visualMap: {
          min: 0,
          max: 10,
          type: 'piecewise',
          orient: 'horizontal',
          right: '5%',
          bottom: 0,
          showLabel: false,
          itemWidth: 12,
          itemHeight: 12,
          // GitHub's exact contribution color palette
          pieces: [
            { value: 0, color: '#ebedf0' },
            { gt: 0, lte: 3, color: '#9be9a8' },
            { gt: 3, lte: 6, color: '#40c463' },
            { gt: 6, lte: 9, color: '#30a14e' },
            { gt: 9, color: '#216e39' },
          ],
        },
        calendar: {
          top: 30,
          left: 40,
          right: 10,
          cellSize: [13, 13],
          range: '2025', // Matches your reference image
          itemStyle: {
            borderWidth: 2,
            borderColor: '#fff',
          },
          splitLine: { show: false },
          yearLabel: { show: false },
          dayLabel: { firstDay: 1, nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
          monthLabel: { nameMap: 'en', margin: 10 },
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: this.heatmapData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      };

      myChart.setOption(option);
      myChart.resize();
    }
  }
}
