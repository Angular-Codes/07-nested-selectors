import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './group-tab.component.html',
  styleUrls: ['./group-tab.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.selectTab(this.tabs.first);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }
}