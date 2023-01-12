import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any
  onDestroy$=new Subject <boolean>
  constructor(private serv:ServiceService){}
  ngOnInit(): void {
    this.serv.getDetails().pipe(takeUntil(this.onDestroy$)).subscribe((details=>{
      this.cards=details
    }))
  }
}
