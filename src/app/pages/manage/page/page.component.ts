import { Page } from './../../../../models/request';
import { Component, OnInit } from '@angular/core';
import { printResult } from 'src/models/print';
import { ECode } from 'src/models/request';
import { PageService } from 'src/services/page.service';
import { AlertService } from 'src/services/alert.service';
import { EMsg } from 'src/models/message';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public isModal: string;
  public dataListAllPage: Array<Page>;

  public pageName: string;
  public pageId: string;
  public pageToken: string;

  constructor(
    private pageService: PageService,
    private myAlert: AlertService,
  ) {
  }

  ngOnInit() {
    this.listAllPage();
  }

  listAllPage() {
    this.pageService.listAllPage().subscribe((result) => {
      printResult(result)

      if (result.status === ECode.success) {
        this.dataListAllPage = result.data;
      } else {
        // myAlert.error()
      }
    })
  }

  insertData() {
    if (!this.pageId) {
      this.myAlert.validateAlert(EMsg.emptyPageId)
    }
    else if (!this.pageName) {
      this.myAlert.validateAlert(EMsg.emptyPageName)
    }
    else {
      const param = {
        pageId: this.pageId,
        pageName: this.pageName,
        pageToken: this.pageToken
      }
      this.pageService.insertPage(param).subscribe((result) => {
        if (result.status === ECode.success) {
          this.dataListAllPage = result.data;
        }
      })
    }
  }

  onClickUpdate() {
    this.isModal = "update"
  }

  onClicAdd() {
    this.isModal = "add"
  }

  clearInput() {
    this.pageName = "";
    this.pageId = "";
    this.pageToken = "";
  }
}
