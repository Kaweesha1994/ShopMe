import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {CommonModule} from "./common/common.module.ts";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}