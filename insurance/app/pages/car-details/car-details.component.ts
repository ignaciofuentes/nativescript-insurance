import { Component } from "@angular/core";
import { Page } from "ui/page";
import { DataService } from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "pages/car-details/car-details.html"
})
export class CarDetailsComponent {
    
    firstText: TitleText = {text:"Car",bold:true};
    secondText: TitleText = {text:"details",bold:false};
    
    constructor(private _router: RouterExtensions,private page: Page, private service: DataService) {
        //this.page.actionBarHidden = true;
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
    
    public onTap(myParam:any) {
        this._router.navigate(["/"+myParam]);
    }

    public goToCar(){
        this._router.navigate(["/personal-details"]);
    }
}