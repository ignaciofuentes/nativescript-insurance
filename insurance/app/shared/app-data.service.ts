import { Injectable } from '@angular/core';
import {carData} from "./car-data";
import { Observable } from "rxjs/observable";
import {request} from "http";
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

  constructor() {
    this.clearAll();
  }
  
  
  states: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

  get insuranceTypes() : Promise<string[]>{
    return new Promise((r)=>{r(["Car","Life","Home","Renters","Health"])});
  }

  get makes() : Promise<string[]>{
    return new Promise<string[]>((r)=>{r(carData.map(t => t.name).sort())});
  }

  get models() : Promise<string[]>{
    return new Promise<string[]>((r)=>{r(carData.filter(t=>t.name===this.selectedMake)[0].models.map(y=>y.name))});
  }

  get years() : Promise<number[]> {
    return new Promise<number[]>((r)=>{r(carData.filter(t=>t.name===this.selectedMake)[0].models.filter(y=>y.name===this.selectedModel)[0].years)});
  }

  get coverages(){
      return new Promise<string[]>(r => 
      r(["Bodily injury liability","Property damage liability","Uninsured motorist","Underinsured motorist","Medical expenses","Collision","Comprehensive"]));
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
        resolve(10);
      }, 800);
    })
  }

  getEstimate2(): Promise<number>{
    let myRequestObject: CorticonRequest = {
      Objects:[{
            model: this.selectedModel,
            driverAge: this.selectedAge,
            state: this.selectedState,
            gender: this.selectedGender.toLowerCase(),
            year: this.selectedYear,
            make: this.selectedMake,
            insuranceType: this.selectedInsuranceType.toLowerCase(),
            __metadata: {
                "#type": "Request"
            },
            coverages: this.selectedCoverages.map(item => {
              return {
                    type: item,
                    __metadata: {
                        "#type": "Coverage"
                    }
                }
              })
      }]
    };
    return new Promise<number>((resolve, reject)=>{
      request({
        url: "http://corticon-demo.dyndns.org:8860/CorticonRollbase56/corticon/execute",
        method: "POST",
        headers: { "Content-Type": "application/json", "dsname":"Insurance Quote" },
        content: JSON.stringify(myRequestObject)
      }).then(response => {
          var result = response.content.toJSON();
          resolve(result.Objects[0].estimatedPremium);
      }).catch(err => {
          reject(err);
      })
    });
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

interface CorticonRequest {
  Objects: CorticonObject[]
}
interface CorticonObject {
  insuranceType: string;
  state: string;
  make: string;
  model: string;
  year: number;
  driverAge: number;  
  gender: string;
  coverages:CorticonCoverage[]
  __metadata:any;

}
interface CorticonCoverage {
  type: string;
  __metadata: any
}