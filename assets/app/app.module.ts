import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {CommonModule} from "./common/common.module.ts";
import { IndexComponent } from "./index/index.component";
import {AppRoutingModule} from "./app-routing.module.ts";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
    declarations: [AppComponent, 
    			   IndexComponent,
    			   ContactComponent],
    imports: [BrowserModule, CommonModule, AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}