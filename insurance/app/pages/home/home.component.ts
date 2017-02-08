import { Component } from "@angular/core";
import { Page } from "ui/page";
import { topmost } from "ui/frame";
import { DataService } from "../../shared/app-data.service";
import { RouterExtensions } from "nativescript-angular/router";
import { TitleText } from "../../shared/header.component";
@Component({
    styles: ['.action-bar {background-color:white;}'],
    templateUrl: "pages/home/home.html"
})
export class HomePageComponent  {

    public options: Promise<string[]>;
    firstText: TitleText = {text:"What",bold:true};
    secondText: TitleText = {text:"kind of insurance do you need?",bold:false};

    constructor(private _router: RouterExtensions,private page: Page, private service: DataService) {
        if(page.ios){
            var controller = topmost().ios.controller;
            var navBar = controller.navigationBar;
            navBar.barStyle = UIBarStyle.BlackTranslucent;
            this.options = this.service.insuranceTypes;
            this.page.actionBarHidden = true;
        }
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

    goToState(){        
        this._router.navigate(["/state"]);
    }
}
