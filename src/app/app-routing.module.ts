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
    path: 'uY2uXw8ftjNkOTV6kHdHuKNZbyu8wfwaXitWeU1KMMbmHkYQzsEquExC7QjIWy6pGoPyO6f7wdNsEfMx',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '1M8Bd6cy9LVVzCZ7pFfQM00PQVkkNvZC198Nd8wP8ymmEhHmdAiTWzk2Y4BfXR7L1AnVo5zPuxXyBgVl',
    loadChildren: () =>
      import('./features/seller/seller.module').then((m) => m.PokemonModule),
  },
  {
    path:'ww4IagYGx0K3eUPcys7Ibf6yq9K32I67N3Q4rmbj6GXqtUj0CGnICQR1cSN3ZDeELbez5xRrHKaAyJLm',
    component :AdminpageComponent
    
  }, 
  { 
    path: 'RgUbQYECrZ62tTdDZr98MMgwjh1Lufgsgg9aqpmNipjGiBFbmdUu1vNZNwyintkzJgi09Q031nocEwWh', 
  loadChildren: () => 
  import('./features/user/user.module').then(m => m.UserModule) },
  
 
  {
    path:'aOe19zmkSvjAyU3f8U3iH2erDlBRpIpnwOZhmOEMsG4AUGlhSefDkiKngsZU45MEBExdHRiAM1Kog72A',
    component :ContactComponent
    
  },
  
  {
    path:'vg6jh2vI5sXIPKcxmhEisMS5ZRFvzklYmNQyb8bZc7ITAkSC3W3dRwTcGJdD6vDwAG4Kk6PAuwbVTKFP',
    component :ContactadminComponent
    
  },

  {
    path:'QnkieA1qkyywixiXxItllqUoU54qMaTnejSsZneMiuenIt3Eh7MY4E0kpQ2ULDYniOZVVo8gf67uMNZ4',
    component :TermsComponent
    
  },

  {
    path:'iiuTbq5pcmpv91BdwBs8ndk8NTonLYfN8CxI60nNnkq4ac7pndjZTzCLfwW4xlkT8y56fRRjRnvgbUDX',
    component :TermsadminComponent
    
  },

  {
    path:'AMGRyXCRHHETqsQujcDqZzER45P7iIXV8PKEkwSBhkLFgYk883hJQTGUMfoNDsIO6420qc8kNFJSqBHI',
    component :BecomeadminComponent
    
  },
  
  {
    path:'0AfYCzWLOmqhipC12PPHtjRtoPOjDDUMm0iMPn7hUS8wkVA9gaw9anv7qGiAz6vGXuHmhGaJRM369BRj',
    component :AboutComponent
    
  },
  {
    path:'BXlqaHvEr76RuGT7FN0BQWhpIjJ4j6AWqllzzGMNZd17gkeDRAi5czFLHWf9ZDxsr8ZQcMXJ7zPXCFwd',
    component :AboutadminComponent
    
  },
  
  {
    path:'QDxOoRhVQ6SOjyYewCVPnzeJFBtJ4Qkyze7XjMN9Axx0w7mgvkUookr2m1zBPA1yKIgSP4sXvm53LUjv',
    component :UsageComponent

  },

  {
    path:'1gAPDaBNtEzC24zwchFGxLi5xgjFZMBVhH3yJo9ZB5VUocqxnhJsBwD319EgPn3NyOkEFxNNn2QIy64l',
    component :UsageadminComponent

  },
  {
    path:'t59eGGRrISAqhtjXoGZ3VMk9ZkbPQAq6WT00bb2FciXRawR83WaIO7npIBe6xLPg1CzBKsDGby0X0fxD',
    component :PremiumComponent

  },
  {
    path:'Eg1Yt3VyPHEqWR3BCOpqIvoEMuT1mTPiFmmnrkRa3GapsEL0xg5gkpuo7LUIEpd7guO44PMeJLvnbjaQ',
    component :CharitiesComponent

  },
  { path: 'g5S0AApOWHQGotjDdSyCbFNIjA6wXtt6qMVGbngWZtqR6UlnFSlqhtzhBRJEd2cDVEXqXzjI8arfNl1X', loadChildren: () => import('./features/char/char.module').then(m => m.CharModule) },
  {
    path:'i4Atw8mkktOyaJMlo0q8B5mwPFIOT8ixhn4sSjkLXxz25RnQeXryOPOOY030b6nvl9FdO7y1jZhGMY28',
    component :FirebaseCrudComponent

  },
  {
    path:'64RMA74lW3T8RJM5ABkIuLn89Z23DY9XxsVVOTOTMs1fHE83r6ttI36BhfN4dzUYE7JbgQd4AB8mJB4y',
    component :FirebaseCrudadminComponent

  },
  {
    path:'la5Bn0nQn7eqrsXnVnBGSBlEVEq3onMXXDExUNh5QRjPUsUGiuHR0hdekuAFEkAU4OVZYfoqJnhbQu3K',
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