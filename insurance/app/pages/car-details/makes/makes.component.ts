import { Component } from "@angular/core";
import { CorticonService } from "../../../shared/app-data.service";
import { TitleText } from "../../../shared/header.component";

@Component({
    template: `
        <ActionBar>
            <NavigationButton text="" icon="res://ic_arrow_back"></NavigationButton>
        </ActionBar>
        <car-detail-form
            [firstText]="firstText"
            [options]="options"
            [selectedOption]="this.service.selectedMake"
            (onItemTap)="onItemTap($event)">
        </car-detail-form>
    `
})
export class MakesComponent  {

    options: Promise<string[]>;
    firstText: TitleText = {text:"Makes",bold:true};

    constructor(private service: CorticonService) {
        this.options = service.makes;
    }

    onItemTap(args) {
        this.service.selectedMake = args;
    }

    isSelected(item){
        return this.service.selectedMake == item
    }
}