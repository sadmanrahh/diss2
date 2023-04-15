import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminpageComponent } from './pages/adminpage/adminpage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { UsageComponent } from './pages/usage/usage.component';
import { UsageadminComponent } from './pages/usageadmin/usageadmin.component';
import { ContactadminComponent } from './pages/contactadmin/contactadmin.component';
import { BecomeadminComponent } from './pages/becomeadmin/becomeadmin.component';
import { AboutadminComponent } from './pages/aboutadmin/aboutadmin.component';
import { PremiumComponent } from './pages/premium/premium.component';
import { CharitiesComponent } from './pages/charities/charities.component';
import { TermsComponent } from './pages/terms/terms.component';
import { TermsadminComponent } from './pages/termsadmin/termsadmin.component';
import { LocationsComponent } from './pages/locations/locations.component';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, AdminpageComponent, ContactComponent, AboutComponent, UsageComponent, UsageadminComponent, ContactadminComponent, BecomeadminComponent, AboutadminComponent, PremiumComponent, CharitiesComponent, TermsComponent, TermsadminComponent, LocationsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class AuthModule {}