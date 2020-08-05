import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './views/usuario/list/list.component';

const routes: Routes = [


  {
    path: 'Usuario',
    loadChildren: './views/usuario/usuario.module#UsuarioModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
