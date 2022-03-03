import { AfterViewInit, Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { QuarkusService } from 'src/app/services/quarkus/quarkus.service';

@Component({
  selector: 'app-attendence-view',
  templateUrl: './attendence-view.component.html',
  styleUrls: ['./attendence-view.component.css']
})
export class AttendenceViewComponent implements AfterViewInit{
  displayedColumns = ['Authenticated','Date',"Time", 'Score','Location'];
  dataSource: MatTableDataSource<UserData>;
  tempgreen="#32a852"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private quarkusService:QuarkusService,private changeDetectorRefs:ChangeDetectorRef) {
    // Create 100 users


  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  }
  ngAfterViewInit() {
    const users: UserData[] = [];
    this.quarkusService.getAttendence().subscribe(data=>{
      data.forEach(element => {
        var date = new Date(Date.parse(element.createdAt));
        var date_str=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
        var time_str=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        Object.assign(element, {date: date_str});
        Object.assign(element, {time: time_str});
        users.push(element);
        console.log(element);
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });

    // Assign the data to the data source for the table to render
    


  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface UserData {
  date: string;
  time:string;
  macAddress: string;
  authenticated:boolean;
  score:string;

}
