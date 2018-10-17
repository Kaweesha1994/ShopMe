import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }   from './index/index.component';
import { ContactComponent }   from './contact/contact.component';
import { BasicLayoutComponent }   from './common/layout/basic-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '', component: BasicLayoutComponent,
  	children: [

  		{ path: 'index', component: IndexComponent },
  		{ path: 'contact', component: ContactComponent }

  	] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}