import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  authenticated = false;
  
    constructor(private apiService:ApiService, private router:Router){
    }
  
    ngOnInit(){
      this.apiService.getAccessToken().subscribe((res)=>{
        this.authenticated = res;
        if(this.authenticated)
        {
          this.router.navigateByUrl('/home');
        }
      },(err)=>{
        
      });
    }

}
