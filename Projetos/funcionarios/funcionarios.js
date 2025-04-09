class funcionarios{
_nome
_matricula
_admissao
_endereco

constructor(nome, matricula,admissao, endereco ){
    this._nome = nome;
    this._matricula = matricula;
    this._admissao = admissao;
    this._endereco = endereco;

}
salario(valor){
    return `Salário de ${valor} recebido por ${this.nome}`;
    
    }
tempodeempres(anoAtual){
    return anoAtual - this.admissao
}
baterPonto() {
    return `Ponto registrado para ${this.nome}`;
}
}