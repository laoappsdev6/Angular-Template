import { EIcon } from './../models/message';
import { Injectable } from '@angular/core';
import { EColor, EMsg } from 'src/models/message';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  successAlert(msg: string) {
    Swal.fire(
      EMsg.titleSuccess,
      msg,
      EIcon.success
    )
  }

  errorAlert(msg: string) {
    Swal.fire(
      {
        title: EMsg.titleError,
        text: msg,
        icon: EIcon.error,
        confirmButtonColor: EColor.info,
        confirmButtonText: EMsg.btConfirm
      }
    )
  }

  validateAlert(msg: string) {
    Swal.fire(
      {
        title: EMsg.titleError,
        text: msg,
        icon: EIcon.warning,
        confirmButtonColor: EColor.info,
        confirmButtonText: EMsg.btConfirm
      }
    )
  }
}
