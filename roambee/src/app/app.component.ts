import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Roambee Test';
  values = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, "#"]];
  allHistory = [];

  ngOnInit(): void {
    this.getHistory();
  }

  getClickedValue(val:any, i: any, j: any) {
    let values: any[] = this.allHistory || [];
    values.push({ key: val, values: i + ',' + j });
    sessionStorage.setItem('clickedHistory', JSON.stringify(values));
    this.getHistory();
  }

  getHistory() {
    if (sessionStorage.getItem('clickedHistory') !== null)
    this.allHistory = JSON.parse(sessionStorage.getItem('clickedHistory') || '') || [];
  }

  clearHistory() {
    sessionStorage.clear();
    this.allHistory = [];
  }

}
