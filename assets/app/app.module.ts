import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {CommonModule} from "./component/common/common.module";
import { IndexComponent } from "./component/index/index.component";
import {AppRoutingModule} from "./app-routing.module";
import { ContactComponent } from "./component/contact/contact.component";
import { FeatureComponent } from './component/feature/feature.component';

@NgModule({
    declarations: [AppComponent, 
    			   IndexComponent,
                   ContactComponent,
                   FeatureComponent],
    imports: [BrowserModule, CommonModule, AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}