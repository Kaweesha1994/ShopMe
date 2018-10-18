import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {CommonModule} from "./component/common/common.module";
import { IndexComponent } from "./component/index/index.component";
import {AppRoutingModule} from "./app-routing.module";
import { ContactComponent } from "./component/contact/contact.component";

@NgModule({
    declarations: [AppComponent, 
    			   IndexComponent,
    			   ContactComponent],
    imports: [BrowserModule, CommonModule, AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}