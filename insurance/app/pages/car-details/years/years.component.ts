import { Component } from "@angular/core";
import { DataService } from "../../../shared/app-data.service";
import { TitleText } from "../../../shared/header.component";

@Component({
    template: `
        <car-detail-form
            [firstText]="firstText"
            [options]="options"
            [selectedOption]="this.service.selectedYear"
            (onItemTap)="onItemTap($event)">    
        </car-detail-form>
    `
})
export class YearsComponent {

    options: Promise<number[]>;
    firstText: TitleText = {text:"Years",bold:true};

    constructor(private service: DataService) {
        this.options = service.years;
    }

    onItemTap(args) {
        this.service.selectedYear = args;
    }

    isSelected(item){
        return this.service.selectedYear == item
    }
}