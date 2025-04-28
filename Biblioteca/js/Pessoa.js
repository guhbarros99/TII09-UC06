export class Pessoa  {
    #id;
    #nome;
    #ativo;

    constructor(id, nome, ativo) {
        this.#id = id;
        this.#nome = nome;
        this.#ativo = true;
    }
    get id() { return this.#id;}
    get nome() { return this.#nome; }
    get ativo() { return this.#ativo;}

    toString() {
        let mensagem = `Nome: ${this.#nome} ID: ${this.#id}`; 
        if(!this.#ativo){
            mensagem +="[Inativo]"
        }
        return mensagem;
    }
    atualizarNome (novoNome) {
        if(!novoNome || novoNome.length <3){
            throw new Error("Dados inválidos para atualização");
             
    }
    this.#nome = novoNome
}
}