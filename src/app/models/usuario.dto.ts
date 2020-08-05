export class Usuario {
    email: string;
    nome: string;
    senha: string;

    public constructor(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}
