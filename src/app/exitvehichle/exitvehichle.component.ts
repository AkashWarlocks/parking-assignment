import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-exitvehichle',
  templateUrl: './exitvehichle.component.html',
  styleUrls: ['./exitvehichle.component.css']
})

export class ExitvehichleComponent implements OnInit {
  parkedData:any = []
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    let data = {
      api:"getParkedData",
      data:{
        carType:"ALL"
      }
    }
    this.getParkedData(data)

  }
  getParkedData(data){
    this.httpService.httpPost(data).subscribe((req)=>{
      this.parkedData = req
      console.log(this.parkedData)
    })
  }

  emptySlot(data){

  }

}
