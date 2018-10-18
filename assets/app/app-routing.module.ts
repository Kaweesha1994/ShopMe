import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }   from './component/index/index.component';
import { ContactComponent }   from './component/contact/contact.component';
import { BasicLayoutComponent }   from './component/common/layout/basic-layout.component';
import { Constant } from './Constant/constant';
import { FeatureComponent } from './component/feature/feature.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '', component: BasicLayoutComponent,
  	children: [

  		{ path: Constant.INDEX, component: IndexComponent },
      { path: Constant.CONTACT, component: ContactComponent },
      {path: Constant.FEATURE, component: FeatureComponent}

  	] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}