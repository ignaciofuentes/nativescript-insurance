import { Component, ElementRef, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { CorticonService } from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "pages/state/state.html"
})
export class StatePageComponent {

    @ViewChild('listview') private lv: ElementRef;
    options: string[];
    firstText: TitleText = {text:"Your",bold:false};
    secondText: TitleText = {text:"state",bold:true};
    
    constructor(private _router: RouterExtensions,private page: Page, private service: CorticonService) {
        this.options = service.states;
    }

    get canProceed(){
        return this.service.selectedState != undefined;
    }

    isSelected(option){
        return this.service.selectedState == option;
    }
    
    onItemTap(args) {
        this.service.selectedState = this.options[args.index];
        let listview = this.lv.nativeElement;
        listview.refresh()
    }
    
    goToCarDetails(){
        this._router.navigate(["/car-details"]);
    }
}