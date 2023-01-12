import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private serv:ServiceService){}
  ngOnInit(){
    
  }
  

}
