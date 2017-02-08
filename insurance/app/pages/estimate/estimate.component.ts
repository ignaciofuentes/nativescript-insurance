import {Component } from "@angular/core";
import {Router} from "@angular/router"
import {Page} from "ui/page";
import {DataService} from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "pages/estimate/estimate.html",
    styles:[`
        .title {
            margin-top: 56;
            color:white;
        }
        .body {
            margin-top:46; 
            margin-left:24;
        }
        .estimate {
            background-color:#00caab;
            color:#ffffff;
        }
    `]
})
export class EstimateComponent  {

    firstText: TitleText = {text:"Your",bold:true};
    secondText: TitleText = {text:"estimate",bold:false};

    estimateValue:Promise<number>;

    constructor(private _router: RouterExtensions,private page: Page, private service: DataService) {
        //this.page.backgroundSpanUnderStatusBar = true;
        //this.page.actionBarHidden=true;
        this.estimateValue = service.getEstimate();
    }

    goHome(){  
        this.service.clearAll();      
        this._router.navigate(["/"], {clearHistory:true});
    }
}