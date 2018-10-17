import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicLayoutComponent } from './layout/basic-layout.component';
import { AppRoutingModule } from '../app-routing.module.ts'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [BasicLayoutComponent, 
    			   	HeaderComponent, 
    			   	FooterComponent, 
    			   	MenuComponent],
    
    imports: [BrowserModule, 
    			AppRoutingModule],
    exports: []
})
export class CommonModule {

}