import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule  } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listar', component:  ListComponent},
      { path: 'adicionar', component:  AddComponent  },


    ]
  }
];

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,ReactiveFormsModule ,FormsModule,

    RouterModule.forChild(routes)],
  schemas: [],
  providers: []
})
export class UsuarioModule { }
