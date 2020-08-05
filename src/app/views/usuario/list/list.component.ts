import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.dto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService){
  }

  usuarios: Usuario[] = [];

  ngOnInit() {

    let temp: Usuario[] = [];
    this.usuarioService.all().subscribe(
      response => {
        response.forEach(function (item) {
          temp.push(new Usuario(item));
        })
        this.usuarios = temp;
        console.log(this.usuarios)
      }
    )
  }

  cadastrar(){
    this.router.navigate(['Usuario/adicionar']);
  }

}
