import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.dto';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formUsuario: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder
     , private usuarioService: UsuarioService,
     private router: Router) { }

  ngOnInit() {
    this.createForm(new Usuario());
  }

  createForm(usuario: Usuario) {
    this.formUsuario = this.formBuilder.group({
      nome: [usuario.nome, Validators.required],
      email: [usuario.email, [Validators.required , Validators.email]],
      senha: [usuario.senha, Validators.required],

    });
  }

  get f() { return this.formUsuario.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.formUsuario.invalid)  return;




    let usuario = new Usuario(this.formUsuario.value);
    this.usuarioService.cadastrar(usuario)
            .subscribe(response => {
              swal({
                title: "Usuário salvo com sucesso!",
                text: "",
                type: 'success',
                showConfirmButton: true
              });

            this.router.navigate(['Usuario/listar']);

            },
            (err) =>{
              swal({
                title: err.error,
                text: '',
                type: 'error',
                showConfirmButton: true
              });
            }
          )
  }

}
