import { Component, ElementRef, ViewChild } from "@angular/core";
import { DataService } from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";

@Component({
    templateUrl: "pages/state/state.html"
})
export class StatePageComponent {

    @ViewChild('listview') private lv: ElementRef;
    options: string[];
    firstText: TitleText = {text:"Your",bold:false};
    secondText: TitleText = {text:"state",bold:true};
    
    constructor(private service: DataService) {
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
}