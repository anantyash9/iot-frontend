import { AfterViewInit, Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { QuarkusService } from 'src/app/services/quarkus/quarkus.service';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { Device } from 'src/app/models/device.model';
import { EditDeviceComponent } from '../edit-device/edit-device.component';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';
@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.html',
  styleUrls: ['./devices-view.css']
})
export class DevicesViewComponent implements AfterViewInit{
  displayedColumns = ['Name','ID',"Type", 'Enabled','Status','Location','Added on','Action'];
  dataSource: MatTableDataSource<DeviceData>;
  tempgreen="#32a852"
  deviceData: DeviceData[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  device={
    "id": 0,
    "deviceName": "device1",
    "deviceIdentifier": "32312312",
    "deviceType": "ai-auth-edge-1",
    "enabled": true,
    "status": true,
    "location": "gate2",
    "createdAt": "2022-03-02T13:12:02.230Z",
    "updatedAt": "2022-03-02T13:12:02.230Z"
  }
  constructor(private quarkusService:QuarkusService,private changeDetectorRefs:ChangeDetectorRef, public dialogue: MatDialog) {
    // Create 100 users
    for (let i = 1; i <= 100; i++) {
      
      this.deviceData.push(this.device);
    }
  }
  ngAfterViewInit() {
    
        this.dataSource = new MatTableDataSource(this.deviceData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    // Assign the data to the data source for the table to render
    


  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
addDevice(){
  this.dialogue.open(AddDeviceComponent,{data:new Device()});
}
updateDevice(device:Device){
  this.dialogue.open(EditDeviceComponent,{data:device});
}
deleteDevice(device:Device){
  var dialogRef = this.dialogue.open(ConfirmDialogueComponent, {
    disableClose: false
  });
  dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      // do confirmation actions
      console.log("deleted");
    }
    dialogRef = null;
  });
}
}


export interface DeviceData {
  "id": number,
  "deviceName": string,
  "deviceIdentifier": string,
  "deviceType": string,
  "enabled": boolean,
  "status": boolean,
  "location": string,
  "createdAt": string,
  "updatedAt": string

}
