
function saudacao(nome) { 
    console.log("Olá" + nome + ", boa noite!");
    console.log("Seja Bem Vindos ao " + lugar);
}

saudacao("Gustavo","Senac" );
saudacao("Gustavo","Senac");
saudacao("Gustavo", "Senac");
saudacao("Gustavo", "Senac");

function soma(a, b){
    return a + b;
}

//let resultado = soma(5, 10);         

//console.log(resultado);

//console.log(soma(3, 4));

//console.log(soma(2, 2) * 5);

//// Escopo local de funções

function teste() {
    let mensagem = "OLá";
    console.log(mensagem);

}

// teste();
// console.log(mensagem); // Erro de escpo

// Função Anonima
let dizAlgo = function () {
    console.log("Eu disse");
    console.log("Ele disse");
    console.log("Nos dissemos");
}

// dizAlgo();

// Arrow Function
function dobro(x) {
    return x * 2;
}

let dobroAnonimo = function(x) {
    return x * 2;
}

let dobroArrow = (x) => {
    return x * 2;
}
let dobroSimples = x => x * 2;

console.log(dobro(3));
console.log(dobroAnonimo(3));
console.log(dobroArrow(3));
console.log(dobroSimples(3));