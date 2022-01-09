import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrativeService } from '../service/administrative.service';
import {MatButtonModule} from '@angular/material/button';
import { DialogModule } from '../shared/dialog/dialog.module';

@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    DialogModule
  ],
  providers: [AdministrativeService],
  exports: [
    CreateAccountComponent
  ]
})
export class CreateAccountModule { }
