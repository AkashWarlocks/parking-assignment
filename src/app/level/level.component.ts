import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  addLevelForm:FormGroup

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {


    this.addLevelForm = new FormGroup({
      levelNo:new FormControl(''),
      totalRows:new FormControl(''),
      motorCylceSlots:new FormControl(''),
      compactSlots:new FormControl(''),
      largeSlots:new FormControl('')
    })
  }
  addLevel(){

  }
  getLevel(data){
    this.httpService.httpPost(data).subscribe((res)=>{
      console.log(data)
    })
  }

}
