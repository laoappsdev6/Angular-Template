import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public setSidebarState: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar(e: boolean): void {
    this.setSidebarState = e;
  }
}
