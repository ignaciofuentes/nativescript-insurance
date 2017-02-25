import { Injectable } from '@angular/core';
import {carData} from "./car-data";
import { Observable, Observer } from "rxjs";
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
@Injectable()
export class DataService {

  selectedInsuranceType:string;
  selectedState:string;
  selectedGender:string;
  selectedAge:number;
  selectedCoverages: string[];

  private _selectedMake:string;
  private _selectedModel:string;
  private _selectedYear:number;

  constructor(private http: Http) {
    this.clearAll();
  }

  get states() {
      return ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  }

  get insuranceTypes():Observable<string[]>{
      return this.http.get("https://api.everlive.com/v1/xf06ngg5dllbzj9c/insuranceTypes")
              .map(response => response.json().Result.map(item => item.Name));
  }

  get makes() : Promise<string[]>{
    return new Promise<string[]>((resolve)=>{resolve(carData.map(t => t.name).sort())});
  }

  get models() : Promise<string[]>{
    return new Promise<string[]>((resolve) => {
      resolve(carData.filter(t=>t.name===this.selectedMake)[0].models.map(y=>y.name))});
  }

  get years() : Promise<number[]> {
    return new Promise<number[]>((resolve)=>{resolve(carData.filter(t=>t.name===this.selectedMake)[0].models.filter(y=>y.name===this.selectedModel)[0].years)});
  }

  get coverages(){
      return new Promise<string[]>(resolve => 
      resolve(["Bodily injury liability","Property damage liability","Uninsured motorist","Underinsured motorist","Medical expenses","Collision","Comprehensive"]));
  }

  get selectedMake(){
    return this._selectedMake;
  }
  set selectedMake(val){
      this._selectedMake = val;
      this.selectedModel = null;
  }

  get selectedModel(){
    return this._selectedModel;
  }
  set selectedModel(val){
      this._selectedModel = val;
      this.selectedYear = null;
  }

  get selectedYear(){
    return this._selectedYear
  }
  set selectedYear(val){
    this._selectedYear=val;
  }

  getEstimate(): Promise<number> {    
    return new Promise<number>((resolve, reject) =>{
      setTimeout(function() {
        //a promise that is resolved after "delay" milliseconds with the data provided
        resolve(1587);
      }, 800);
    })
  }

  clearAll(){
    this.selectedInsuranceType = null;
    this.selectedState = null;
    this.selectedMake = null;
    this.selectedModel = null;
    this.selectedYear = null;
    this.selectedCoverages = [];
    this.selectedGender = null;
    this.selectedAge=null;
  }
}

interface Car {
  make:string;
  model:string;
  years:number[];

}