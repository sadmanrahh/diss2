import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AdminpageComponent } from './features/auth/pages/adminpage/adminpage.component';
import { ContactComponent } from './features/auth/pages/contact/contact.component';
import { AboutComponent } from './features/auth/pages/about/about.component';
import { UsageComponent } from './features/auth/pages/usage/usage.component';
import { UsageadminComponent } from './features/auth/pages/usageadmin/usageadmin.component';
import { ContactadminComponent } from './features/auth/pages/contactadmin/contactadmin.component';
import { BecomeadminComponent } from './features/auth/pages/becomeadmin/becomeadmin.component';
import { PremiumComponent } from './features/auth/pages/premium/premium.component';
import { CharitiesComponent } from './features/auth/pages/charities/charities.component';
import { FirebaseCrudComponent } from './firebase-crud/firebase-crud.component';
import { FirebaseCrudadminComponent } from './firebase-crudadmin/firebase-crudadmin.component';
import { AboutadminComponent } from './features/auth/pages/aboutadmin/aboutadmin.component';
import { TermsComponent } from './features/auth/pages/terms/terms.component';
import { TermsadminComponent } from './features/auth/pages/termsadmin/termsadmin.component';
import { LocationsComponent } from './features/auth/pages/locations/locations.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./features/seller/seller.module').then((m) => m.PokemonModule),
  },
  {
    path:'adminpage',
    component :AdminpageComponent
    
  }, 
  { 
    path: 'user', 
  loadChildren: () => 
  import('./features/user/user.module').then(m => m.UserModule) },
  
 
  {
    path:'contact',
    component :ContactComponent
    
  },
  
  {
    path:'contactadmin',
    component :ContactadminComponent
    
  },

  {
    path:'terms',
    component :TermsComponent
    
  },

  {
    path:'termsadmin',
    component :TermsadminComponent
    
  },

  {
    path:'becomeadmin',
    component :BecomeadminComponent
    
  },
  
  {
    path:'about',
    component :AboutComponent
    
  },
  {
    path:'aboutadmin',
    component :AboutadminComponent
    
  },
  
  {
    path:'usage',
    component :UsageComponent

  },

  {
    path:'usageadmin',
    component :UsageadminComponent

  },
  {
    path:'premium',
    component :PremiumComponent

  },
  {
    path:'charities',
    component :CharitiesComponent

  },
  { path: 'char', loadChildren: () => import('./features/char/char.module').then(m => m.CharModule) },
  {
    path:'charity',
    component :FirebaseCrudComponent

  },
  {
    path:'charityadmin',
    component :FirebaseCrudadminComponent

  },
  {
    path:'locations',
    component :LocationsComponent

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}