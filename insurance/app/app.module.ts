import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";


import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home/home.component";
import { StatePageComponent } from "./pages/state/state.component";
import { CarDetailsComponent } from "./pages/car-details/car-details.component";
import { CarDetail} from "./pages/car-details/car-detail";
import { HeaderComponent } from "./shared/header.component";
import { MakesComponent } from "./pages/car-details/makes/makes.component";
import { ModelsComponent } from "./pages/car-details/models/models.component";
import { YearsComponent } from "./pages/car-details/years/years.component";
import { PersonalDetailsComponent } from "./pages/personal-details/personal-details.component";
import { CoveragesComponent } from "./pages/coverages/coverages.component";
import { EstimateComponent } from "./pages/estimate/estimate.component";
import { DataService } from "./shared/app-data.service";
import { ProgressBar } from "./shared/progress-bar";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule
  ],
  declarations: [
      AppComponent,
      StatePageComponent,
      CarDetailsComponent,
      ProgressBar,
      CarDetail,
      MakesComponent,
      HeaderComponent,
      ModelsComponent,
      YearsComponent,
      PersonalDetailsComponent,
      CoveragesComponent,
      EstimateComponent,
      HomePageComponent,

  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }