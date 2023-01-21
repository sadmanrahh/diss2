import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharRoutingModule } from './char-routing.module';
import { FormComponent } from './components/form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { CharComponent } from './char.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  
  declarations: [ CharComponent, FormComponent, ListComponent, DetailComponent, ],
  providers: [],
  imports: [
    CommonModule,
    CharRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    Ng2SearchPipeModule,
    
    
  ],
  
})
export class CharModule {}
