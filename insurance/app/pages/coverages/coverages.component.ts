import { Component } from "@angular/core";
import { DataService } from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "pages/coverages/coverages.html",
})
export class CoveragesComponent {

    options: Promise<string[]>;
    firstText: TitleText = {text:"Coverage",bold:true};
    secondText: TitleText = {text:"type",bold:false};

    constructor(private _router: RouterExtensions, private service: DataService) {
        this.options = this.service.coverages;
        
    }

    get canProceed(){
        if(this.service.selectedCoverages.length > 0)
            return true;
        return false;
    }

    isSelected(option){
        return this.service.selectedCoverages.indexOf(option)!=-1
    }
    
    onTap(myParam) {
        var index = this.service.selectedCoverages.indexOf(myParam);
        if(index==-1){
            this.service.selectedCoverages.push(myParam);
        }
        else {
            this.service.selectedCoverages.splice(index,1);
        }
    }

    goToState(){        
       this._router.navigate(["/estimate"], {clearHistory:true});
    }
}