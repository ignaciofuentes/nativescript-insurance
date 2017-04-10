import {Component } from "@angular/core";
import {DataService} from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";

@Component({
    templateUrl: "pages/estimate/estimate.html",
    styles:[`
        #estimate Label {
            color:white;
        }
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
            color:white;
        }
    `]
})
export class EstimateComponent  {

    firstText: TitleText = {text:"Your",bold:true};
    secondText: TitleText = {text:"estimate",bold:false};

    estimateValue:Promise<number>;

    constructor(private service: DataService) {
        this.estimateValue = service.getEstimate();
    }

    goHome(){  
        this.service.clearAll();      
        this._router.navigate(["/"], {clearHistory:true});
    }
}