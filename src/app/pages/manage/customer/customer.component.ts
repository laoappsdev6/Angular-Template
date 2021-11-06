import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/services/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public isModal: string;
  constructor(private myAlert: AlertService) { }

  ngOnInit() {
  }
  onAdd() {
    this.isModal = "add"
  }

  onUpdate() {
    this.isModal = "update"
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#33b5e5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.myAlert.successAlert("Delete customer successfully")

      }
    })
  }

  onInsert() {
    this.myAlert.successAlert("Insert customer successfully")
  }

}
