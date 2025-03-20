let estacionamento = [
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"]
]

function estacionamento(linha, coluna, placa) {
    estacionamento [linha][coluna] = placa;

}
function estacionarCarro(linha, coluna, placa){
    if(estacionamento[linha][coluna] === "Vazio") {
        estacionamento [linha] [coluna] = placa;

    }else{
        console.log(`ESSA VAGA ESTÁ OCUPADA VEÍCULO: ${estacionamento [linha] [coluna]}`);
    }
}
function removerCarro(linha, coluna){
    if(estacionamento [linha][coluna] !== "vazio"){
    estacionamento[linha][coluna] = "Vazio"
}else{
    console.log("VAGA JÁ SE ENCONTRA VAZIA!");
}
}
function exibirEstacionamento() {
    console.log(estacionamento);
}


exibirEstacionamento();
estacionarCarro(1, 1, "ASSAS");
estacionarCarro(2, 1, "ASSSA");
exibirEstacionamento();
estacionarCarro(1, 1, "TTT0055");
removerCarro(0,0);
exibirEstacionamento();
estacionarCarro(1, 1, "TTT0055");
exibirEstacionamento();