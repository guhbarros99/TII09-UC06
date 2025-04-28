class Livro{
  #id;
  #titulo;
  #ano;
  #autor; // instância de Autor
  #ativo
    constructor(nome){
        this.#id = id
        this.#titulo = titulo;
        this.#ano = ano;
        this.#autor = autor;
        this.#ativo = true;
    }

    get id() { this.#id;}
    get titulo(){ this.#titulo;}
    get ano() { this.#ano;}
    get autor() {this.#autor}
    get ativo() {  this.#ativo;}

    toString() {
        const status = this.#ativo ? 'ATIVO' : 'INATIVO';
        return `[${status}] ${this.#titulo} (${this.#ano}) - ${this.#autor.nome}`;
      }
}