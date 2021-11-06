import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() getSidebarState: boolean | undefined;
  public isFirst: boolean = true;
  public routerPath: string = "dashboard";
  constructor(private route: Router) { }

  ngOnInit(): void {

    let index = this.route.url.split('/').length;
    const path = this.route.url.split('/')[index - 1]
    this.routerPath = path;

  }

  notFirst() {
    this.isFirst = false;
  }

  onRoutes(path: string) {
    this.routerPath = path
  }
}
