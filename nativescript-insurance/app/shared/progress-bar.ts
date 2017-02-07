import { Component, Input } from "@angular/core";
@Component({
    template: `
    <GridLayout row="2" verticalAlignment="bottom">
        <Label class="step" [text]="text" verticalAlignment="bottom"></Label>
        <StackLayout class="complete-bar" verticalAlignment="bottom"></StackLayout>
        <StackLayout class="progress-bar" [width]="percentage" verticalAlignment="bottom" horizontalAlignment="left"></StackLayout>
    </GridLayout>
    `,
    selector: "progress-bar",
})
export class ProgressBar   {
    @Input() step: number;

    get text(){
        return this.step+"/5";
    }

    get percentage(){
        return (this.step/5*100)+"%";
    }
    
}
