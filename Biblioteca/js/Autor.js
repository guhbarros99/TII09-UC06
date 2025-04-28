import { Pessoa } from "../Pessoa.js";

export class Autor{

    #id;
    #nome;
    #ativo;
    constructor(nome){
        this.#id = Pessoa.getProximoId('cliente-');
        this.#nome = nome;
        this.#ativo = true;
    }

    get id() { return this.#id;}
    get nome() { return this.#nome}
    get ativo() { return this.#ativo;}

    static fromJSON(x) {
        const Autor = new Autor(x.id, x.nome, x.ativo);
        Autor.#id = x.id;
        return Autor;
    }
}