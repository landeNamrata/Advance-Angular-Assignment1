import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from '../common.service'
@Component({
  selector: 'app-fullcalender',
  templateUrl: './fullcalender.component.html',
  styleUrls: ['./fullcalender.component.css']
})

export class FullcalenderComponent implements OnInit {
  CalendarData: any = [];

  // constructor(private httpService: HttpClient, private commonService: CommonService) {
  //   this.commonService.getUsers().subscribe(data => {
  //     this.CalendarData = data as string[];
  //     console.log(this.CalendarData);
  //   },
  //     (err: HttpErrorResponse) => {
  //       console.log(err.message);
  //     }
  //   );
  // }
constructor(private httpService: HttpClient, private commonService: CommonService){}
  items: any = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events:
    [
      { title: 'Republic Day', date: '2020-01-26' },
      { title: 'Valentine Day', date: '2020-02-14' },
      { title: 'Mahashivratri', date: '2020-02-21' },
      { title: 'Holi', date: '2020-03-09' },
      { title: 'Good Friday', date: '2020-04-10' },
      { title: 'Maharashtra Din', date: '2020-05-01' },
      { title: 'Wad Pornima', date: '2020-06-05' },
      { title: 'Nagpanchami', date: '2020-07-25' },
      { title: 'Independence Day', date: '2020-08-15' },
      { title: 'Dasara', date: '2020-10-25' },
      { title: 'Lakshami Poojan', date: '2020-11-14' },
      { title: 'Bhaubij', date: '2020-11-16' },
      { title: 'Crismus', date: '2020-12-27' },
    ]
  };
  handleDateClick(arg) {
    console.log(arg)
    alert('date click! ' + arg.dateStr)
  }
  ngOnInit(){}
  // ngOnInit() { this.getData()}
  // getData(){
  //   this.httpService.get('../assets/data.json').subscribe(data => {
  //     this.CalendarData = data ;
  //     console.log(this.CalendarData);
  //   },
  //     (err: HttpErrorResponse) => {
  //       console.log(err.message);
  //     }
  //   );
  // }
}
