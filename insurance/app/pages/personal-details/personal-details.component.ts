import { Component, ElementRef, ViewChild } from "@angular/core";
import { TextField } from "ui/text-field";
import { DataService } from "../../shared/app-data.service";
import { TitleText } from "../../shared/header.component";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "pages/personal-details/personal-details.html",
})
export class PersonalDetailsComponent {

    @ViewChild("nameTextField") nameTextField: ElementRef;
    firstText: TitleText = {text:"Your",bold:true};
    secondText: TitleText = {text:"details",bold:false};

    constructor(private _router: RouterExtensions, private service: DataService) {
    }
    
    onTap(myParam) {
        let textField = <TextField>this.nameTextField.nativeElement;
        textField.dismissSoftInput();
        this.service.selectedGender = myParam;
    }

    get selectedAge(){
        return this.service.selectedAge;
    }
    set selectedAge(t){
        this.service.selectedAge = t;
    }

    get canProceed(){
        if(this.service.selectedGender && this.service.selectedAge)
            return true;
        return false;
    }

    dismissKeyboard() {
        let textField = <TextField>this.nameTextField.nativeElement;
        textField.dismissSoftInput();
    }
    isSelected(gender){
        return this.service.selectedGender == gender;
    }

    goToState(){      
        this._router.navigate(["/coverages"]);
    }
}
