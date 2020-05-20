import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-exitvehichle',
  templateUrl: './exitvehichle.component.html',
  styleUrls: ['./exitvehichle.component.css']
})

export class ExitvehichleComponent implements OnInit {
  parkedData:any = []
  searchVehicle:FormGroup
  totalVehicle = {
    "Motorcycle":0,
    "Car":0,
    "Bus":0,
    "Total":0
  }
  search = {
    api:"getParkedData",
    data:{
      carType:"ALL"
    }
  }
  currentVehicle:any = {}
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {

    this.searchVehicle = new FormGroup({
      vehicleNo: new FormControl('')
    })

    this.getParkedData(this.search)
    this.getVehicleCount()

  }

  getVehicleCount(){
    let data = {
      api:"getVehicleCount",
      data:"Give me count"
    }
    this.httpService.httpPost(data).subscribe((res)=>{
      this.totalVehicle.Motorcycle = res.Motorcycle;
      this.totalVehicle.Car = res.Car
      this.totalVehicle.Bus = res.Bus
      this.totalVehicle.Total = res.Total

    })

  }
  getParkedData(data){
    this.httpService.httpPost(data).subscribe((res)=>{
      this.parkedData = res
      console.log("level no ",this.parkedData)
    })
  }

  emptySlot(spot){
    console.log(spot)
    let data = {
      api:"deAllocateSpot",
      data:spot
    }
    this.httpService.httpPost(data).subscribe((res)=>{
      console.log(res)
      alert("vehicle exited")
      this.getParkedData(this.search)
      this.getVehicleCount()

    })


  }

}
