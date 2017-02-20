import { Component, Input, Output, ElementRef, EventEmitter, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    template: `
    <ActionBar>
        <NavigationButton text="" icon="res://ic_arrow_back" android:visibility="collapse"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, *,auto">
        <header [firstText]="firstText"></header>
        <StackLayout row="1" style="margin-top:38;">
            <ListView #listview [items]="options | async" (itemTap)="itemTap($event)">
                <template let-item="item">
                    <GridLayout columns="44, *" height="48">
                        <StackLayout colSpan="2" verticalAlignment="top" class="line"></StackLayout>      
                        <Label verticalAlignment="center" width="20" col="0" row="0" text="&#xf05d;" class="font-awesome check" *ngIf="isSelected(item)"></Label>
                        <Label verticalAlignment="center" col="1" [text]="item" style="margin:10 0 10 0;font-size:20;" [class.passive]="!isSelected(item)"></Label>
                    </GridLayout>
                </template>
            </ListView>  
        </StackLayout>
        <progress-bar [step]="3"></progress-bar>
    </GridLayout>
    `,
    selector: "car-detail-form",
})
export class CarDetail   {
    @Input() options:Promise<string[]>;
    @Input() firstText;
    @Input() selectedOption;
    @Output() onItemTap = new EventEmitter<string>();
    @ViewChild('listview') private lv: ElementRef;

    constructor(private _router: RouterExtensions) {        
    }

    isSelected(item){
        return this.selectedOption == item;
    }

    itemTap(args) {
        let listview = this.lv.nativeElement;
        this.options.then(items => {
            this.onItemTap.emit(items[args.index]);
            listview.refresh();
            this._router.back();
        });
    }
}