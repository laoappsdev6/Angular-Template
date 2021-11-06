import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { myUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { printSend } from 'src/models/print';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public http: HttpClient) {

  }

  protected getBaseUrl(): string {

    return myUrl.local;
  }

  protected headerBase(): any {
    const headers = new HttpHeaders({ "Content-Type": "application/json" })
    // .set("Access-Control-Allow-Origin", "*")
    // .set("token", token + "")
    // .set("method", method);
    return headers;
  }

  protected getToken(): string {
    // const token = localStorage.getItem("Token");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJuYW1lIjoiUGhvbmUiLCJwaG9uZU51bWJlciI6IjAyMDU2MTUwMTE0IiwidXNlcm5hbWUiOiJhZG1pbjIiLCJjcmVhdGVkQXQiOiIyMDIxLTEwLTI1VDA3OjU2OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEwLTI1VDA3OjU2OjE2LjAwMFoifSwiaWF0IjoxNjM1MTQ4ODk4LCJleHAiOjM2MDAxNjM1MTQ4ODk4fQ.T3bKYxHsYMesQATagppaGR8nSj39foZBk9B9vHt3s2o"
    return token;
  }

  protected setObject(object: string, method: string, data: Object): Object {
    const obj = {
      object: object,
      method: method,
      data: data,
      token: this.getToken()
    };
    return obj;
  }

  protected sendRequest(param: Object): any {

    printSend(param);
    return this.http.post(this.getBaseUrl(), param, { headers: this.headerBase() })
  }
}
