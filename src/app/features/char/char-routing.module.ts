import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharComponent } from './char.component';

const routes: Routes = [{ path: '', component: CharComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharRoutingModule { }
