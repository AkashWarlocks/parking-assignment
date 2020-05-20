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
    levelNo:null,
    rowNo:null,
    slotNo:null,
    vehicleType:"",
    slotType:"",
  }

  constructor(private HttpService:HttpService) { }

  ngOnInit(): void {
    this.entryForm = new FormGroup({
      carType: new FormControl('Motorcycle'),
      vehicleNo: new FormControl(null,[Validators.required])
    })
    this.exitForm = new FormGroup({
      carType:new FormControl(''),
      levelNo:new FormControl(''),
      rowNo: new FormControl(''),
      slotNo:new FormControl(''),
    })
    this.searchVehicle = new FormGroup({
      vehicleNo: new FormControl(null,[Validators.required])
    })

  }

  allotParking(){

    if(this.entryForm.invalid){
      this.entryForm.get("vehicleNo").dirty
      return
    }
    const data = {
      api:"allotparking",
      data:{
        carType:this.entryForm.value.carType,
        vehicleNo:this.entryForm.value.vehicleNo
      }
    }
    this.HttpService.httpPost(data).subscribe((res)=>{
      console.log("allot",res)
      if(res.status == "parking Not Available"){
        this.currentPark.status= res.status
        alert(res.status)
        return
      }
      this.currentPark.status= res.status
      this.currentPark.levelNo = res.levelNo
      this.currentPark.rowNo = res.rowNo
      this.currentPark.slotNo = res.slotNo

    })
  }
  print(){

  }
  getSinglevehicle(){
    if(this.searchVehicle.invalid){
      this.searchVehicle.dirty
      return
    }
    const data = {
      api:"getVehicleDetails",
      data:{
        vehicleNo:this.searchVehicle.value.vehicleNo,
      }
    }
    this.HttpService.httpPost(data).subscribe((res)=>{
      console.log(res)
      if(res.status == "Not Available"){
        this.currentVehicle.status = res.status
        alert(res.status)
        return
      } else{
        this.currentVehicle.status = res.status
        this.currentVehicle.levelNo = res.data[0].levelNo
        this.currentVehicle.rowNo = res.data[0].rowNo
        this.currentVehicle.slotNo = res.data[0].slots.slotNo
        this.currentVehicle.vehicleType = res.data[0].slots.vehicletype
      }

    })
  }
  get vehicleNo() { return this.entryForm.get('vehicleNo'); }



}
