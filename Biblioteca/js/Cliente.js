import { Pessoa } from "../Pessoa.js";

export class Cliente{

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

    static fromJSON(json) {
        const cliente = new cliente(json.id, json.nome, json.ativo);
        cliente.#id = json.id;
        return cliente;
    }
}