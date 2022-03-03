import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  campaignOne: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    // this.campaignOne = new FormGroup({
    //   start: new FormControl(),
    //   end: new FormControl(),
    // });
  }

  ngOnInit(): void {
  }
  registerDevice() {
    console.log(this.data);
  }
}