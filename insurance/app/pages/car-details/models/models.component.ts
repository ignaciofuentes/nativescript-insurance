import { Component } from "@angular/core";
import { DataService} from "../../../shared/app-data.service";
import { TitleText } from "../../../shared/header.component";

@Component({
    template: `
        <ActionBar>
            <NavigationButton text="" icon="res://ic_arrow_back"></NavigationButton>
        </ActionBar>
        <car-detail-form
            [firstText]="firstText"
            [options]="options"
            [selectedOption]="this.service.selectedModel"
            (onItemTap)="onItemTap($event)">    
        </car-detail-form>
    `
})
export class ModelsComponent{

    options: Promise<string[]>;
    firstText: TitleText = {text:"Models",bold:true};

    constructor(private service: DataService) {
        this.options = service.models;
    }

    onItemTap(args) {
        this.service.selectedModel = args;
    }

    isSelected(item){
        return this.service.selectedModel == item
    }
}