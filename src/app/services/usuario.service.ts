import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.dto';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(protected httpClient: HttpClient) { }

    all(): Observable<Usuario[]> {
        return this.httpClient.get<Usuario[]>("http://localhost:8080/api/usuario");
    }

    cadastrar(usuario: Usuario): Observable<Usuario> {
        return this.httpClient.post<Usuario>("http://localhost:8080/api/usuario", usuario);
    }
}