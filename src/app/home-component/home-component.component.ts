import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  entryForm:FormGroup;
  exitForm:FormGroup
  currentPark:any = {}
  searchVehicle:FormGroup
  currentVehicle:any = {
    levelNo:0,
    rowNo:0,
    slotNo:0,
    vehicleType:"",
    slotType:"",
  }

  constructor(private HttpService:HttpService) { }

  ngOnInit(): void {
    this.entryForm = new FormGroup({
      carType: new FormControl('Motorcycle'),
      vehicleNo: new FormControl('')
    })
    this.exitForm = new FormGroup({
      carType:new FormControl(''),
      levelNo:new FormControl(''),
      rowNo: new FormControl(''),
      slotNo:new FormControl(''),
    })
    this.searchVehicle = new FormGroup({
      vehicleNo: new FormControl('')
    })

  }

  allotParking(){
    const data = {
      api:"allotparking",
      data:{
        carType:this.entryForm.value.carType,
        vehicleNo:this.entryForm.value.vehicleNo
      }
    }
    this.HttpService.httpPost(data).subscribe((res)=>{
      console.log("allot",res)
      this.currentPark.status= res.status
      this.currentPark.levelNo = res.levelNo
      this.currentPark.rowNo = res.rowNo
      this.currentPark.slotNo = res.slotNo
      this.currentPark.vehicleType = res.slots.vehicletype
      this.currentPark.slotType = res.slots.slotType
    })
  }
  print(){

  }
  getSinglevehicle(){
    const data = {
      api:"getVehicleDetails",
      data:{
        vehicleNo:this.searchVehicle.value.vehicleNo,
      }
    }
    this.HttpService.httpPost(data).subscribe((res)=>{
      console.log(res)
      this.currentVehicle = res
    })
  }



}
