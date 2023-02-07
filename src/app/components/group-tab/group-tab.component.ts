import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
import { Component, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './group-tab.component.html',
  styleUrls: ['./group-tab.component.css'],
})
export class TabsComponent implements AfterViewInit {
  
  state = 'in';
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.selectTab(this.tabs.first);
    });
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }
}