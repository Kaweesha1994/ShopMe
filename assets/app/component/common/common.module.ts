import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicLayoutComponent } from './layout/basic-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../../app-routing.module';

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