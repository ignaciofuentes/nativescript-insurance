import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";


import {HomePageComponent} from "./pages/home/home.component";
import {StatePageComponent} from "./pages/state/state.component";
import {CarDetailsComponent} from "./pages/car-details/car-details.component";
import {MakesComponent} from "./pages/car-details/makes/makes.component";
import {ModelsComponent} from "./pages/car-details/models/models.component";
import {YearsComponent} from "./pages/car-details/years/years.component";
import {PersonalDetailsComponent} from "./pages/personal-details/personal-details.component";
import {CoveragesComponent} from "./pages/coverages/coverages.component";
import {EstimateComponent} from "./pages/estimate/estimate.component";

const routes = [
  { path: "state", component: StatePageComponent },
  { path: "car-details", component: CarDetailsComponent },
  { path: "makes", component: MakesComponent },
  { path: "models", component: ModelsComponent },
  { path: "years", component: YearsComponent },
  { path: "personal-details", component: PersonalDetailsComponent },
  { path: "coverages", component: CoveragesComponent },
  { path: "estimate", component: EstimateComponent },
  { path: "", component: HomePageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }