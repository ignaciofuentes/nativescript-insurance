import { Component } from "@angular/core";
import { Page } from "ui/page";
import { topmost } from "ui/frame";
import { DataService } from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";
import { Observable } from "rxjs";
import { InsuranceType } from "../../models";
@Component({
    templateUrl: "pages/home/home.html"
})
export class HomePageComponent  {

    options: Observable<InsuranceType[]>;
    firstText: TitleText = {text:"What",bold:true};
    secondText: TitleText = {text:"kind of insurance do you need?",bold:false};

    constructor(private page: Page, private service: DataService) {
        if(page.ios){
            var controller = topmost().ios.controller;
            var navBar = controller.navigationBar;
            navBar.barStyle = UIBarStyle.BlackOpaque;
        }
        this.options = this.service.insuranceTypes;
    }

    isSelected(option){
        return this.service.selectedInsuranceType == option
    }
    
    onTap(myParam) {
        this.service.selectedInsuranceType=myParam;
    }
    
    get canProceed(){
        return this.service.selectedInsuranceType =='Car';
    }
}
