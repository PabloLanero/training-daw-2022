class Coche{
    constructor(marca,consumo,litros,distanciaDestino){
        this.marca = marca
        this.consumo = consumo
        this.litros= litros
        this.distanciaDestino = distanciaDestino
    }

    repostar(litros){
        console.log("Repostando");
        this.litros += litros
    }

    move(distancia){
        console.log("Moviendo...");
        this.distanciaDestino -= distancia
        this.litros -= distancia/this.consumo
        console.log(`Quedan ${  this.litros}`);
        
    }
    restante(){
        console.log(`Quedan ${this.distanciaDestino} km`);
        
    }
}

let coche = new Coche("mercedes",6,0,300)
coche.repostar(110)
coche.move(200)
coche.restante()