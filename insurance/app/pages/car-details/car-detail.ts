import { Component, Input, Output, ElementRef, EventEmitter, ViewChild } from "@angular/core";
@Component({
    template: `
    <GridLayout rows="auto, *,auto">
        <header [firstText]="firstText"></header>
        <StackLayout row="1" style="margin-top:38;">
            <ListView #listview [items]="options | async" (itemTap)="itemTap($event)">
                <template let-item="item">
                    <GridLayout columns="44, *" height="48">
                        <StackLayout colSpan="2" verticalAlignment="top" class="line"></StackLayout>      
                        <Image width="20" col="0" row="0" src="res://ic_selected" *ngIf="isSelected(item)"></Image>
                        <Label col="1" [text]="item" style="font-size:20" [class.passive]="!isSelected(item)"></Label>
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

    isSelected(item){
        return this.selectedOption == item;
    }

    itemTap(args) {
        let listview = this.lv.nativeElement;
        this.options.then(items => {
            this.onItemTap.emit(items[args.index]);
            listview.refresh();
        })
        
    }
}