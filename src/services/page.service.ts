import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EPageMethod } from 'src/models/method';
import { EObject } from 'src/models/object';
import { BaseService } from './base.service';
import { Res } from 'src/models/request'

@Injectable({
  providedIn: 'root'
})
export class PageService extends BaseService {

  listAllPage(param: Object = {}): Observable<Res> {
    const obj = this.setObject(EObject.page, EPageMethod.listAll, param)
    return this.sendRequest(obj);
  }

  insertPage(param: Object = {}): Observable<Res> {
    const obj = this.setObject(EObject.page, EPageMethod.add, param)
    return this.sendRequest(obj)
  }
}
