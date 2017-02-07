import { Component, Input } from "@angular/core";
@Component({
    selector:"header",
    template: `
        <Label class="title" textWrap="true" row="0" fontSize="32">
        <FormattedString>
            <Span [text]="firstText.text" [attr.fontAttributes]="firstText.bold ? 'Bold' : 'Normal'"></Span>
            <Span *ngIf="secondText" text=" "></Span>
            <Span *ngIf="secondText" [text]="secondText.text" [attr.fontAttributes]="secondText.bold ? 'Bold' : 'Normal'"></Span>
        </FormattedString>
    </Label>
    `,
})
export class HeaderComponent {
    @Input() firstText:TitleText;
    @Input() secondText:TitleText;
}
export interface TitleText {
    text:string;
    bold:boolean;
}