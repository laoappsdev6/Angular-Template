import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sidebarState: boolean = false;
  @Output() setSidebarState: any = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  toggleSidebar(): void {
    if (this.sidebarState === false) {
      this.sidebarState = true;
      this.setSidebarState.emit(true);
    }
    else {
      this.sidebarState = false;
      this.setSidebarState.emit(false);
    }
  }

}
