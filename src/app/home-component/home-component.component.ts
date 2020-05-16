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

  constructor(private HttpService:HttpService) { }

  ngOnInit(): void {
    this.entryForm = new FormGroup({
      carType: new FormControl('Motorcycle')
    })
    this.exitForm = new FormGroup({
      carType:new FormControl(''),
      levelNo:new FormControl(''),
      rowNo: new FormControl(''),
      slotNo:new FormControl(''),
    })
  }

  login(){
    const data = {
      api:"allotparking",
      data:{
        carType:this.entryForm.value.carType
      }
    }
    this.HttpService.httpPost(data).subscribe((res)=>{
      this.currentPark = res
    })
  }
  print(){

  }
  selectType(carType){
    console.log(carType)
    const data = {
      api:"getParkedData",
      data:{
        carType:carType
      }
    }
    this.HttpService.httpPost(data).subscribe((res)=>{
      this.currentPark = res
      console.log(this.currentPark)
    })
  }

}
