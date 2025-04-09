class Animal {
    emiteSom() {
        console.log("O Animal fez barulho!");
    }
}

class Cachorro extends Animal {
    emiteSom(){
        console.log("O Animal fez barulho!!");
    }
}

class Cachorro extends Animal{
    emiteSom(){
        console.log("AU! AU! AU!");
    }
    
}

class Gato extends Animal{
    emiteSom(){
        super.emiteSom();
        console.log("MIAAAAUUUUUU!");
    }
    
}
let animal1 = new Cachorro();
let animal2 = new Gato();
animal1.emiteSom();
animal2.emiteSom();

class Pessoa {
    nome;
    idade;
}
class Endereco{
    rua;
    numero;
    estado;
}