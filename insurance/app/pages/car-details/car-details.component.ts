import { Component } from "@angular/core";
import { DataService } from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";

@Component({
    templateUrl: "pages/car-details/car-details.html"
})
export class CarDetailsComponent {
    
    firstText: TitleText = {text:"Car",bold:true};
    secondText: TitleText = {text:"details",bold:false};
    
    constructor(private service: DataService) {
    }

    get canProceed(){
        if(this.service.selectedMake && this.service.selectedModel && this.service.selectedYear)
            return true;
        return false;
    }

    get selectedMake(){
        return this.service.selectedMake;
    }
    
    get selectedModel(){
        return this.service.selectedModel;
    }
    get selectedYear(){
        return this.service.selectedYear;
    }
}