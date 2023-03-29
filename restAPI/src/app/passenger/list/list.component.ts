import { Component, OnInit } from '@angular/core';
import { PassengerServiceService } from 'src/app/service/passenger-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userDetails: any;
  newDataRow: any;
  data: any;

  constructor(private passengerService: PassengerServiceService) { }

  receiveData() {
    this.passengerService.getData().subscribe((res: any) => {
      this.userDetails = res;
    })
  }

  ngOnInit(): void {
    this.receiveData();
  }

  removeRow(id: number) {
    this.passengerService.deleteData(id).subscribe();
    this.receiveData();
    console.log(id);
  }

  editOldData(id: any) {
    this.passengerService.getNewData(id).subscribe((res: any) => {

      console.log(res);
    })
  }

}

