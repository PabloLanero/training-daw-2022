class Rectangle {

    // add x1, y1
    constructor(x, y, x1,y1) {
        this.x = x;
        this.y = y;
        this.vertice1 = [x1,y1]
        this.vertice2 = [this.vertice1[0]+this.x , this.vertice1[1]]
        this.vertice3 = [this.vertice1[0]+this.x , this.vertice1[1]+this.y]
        this.vertice4 = [this.vertice1[0], this.vertice1[1]+this.y]
        console.log(this.vertice1);
        console.log(this.vertice2)
        console.log(this.vertice3)
        console.log(this.vertice4)
        
    }

    print() {
        console.log(`[${this.x}, ${this.y}]`)
    }

    // area
    area(){
        console.log(`El area del cuadrado es ${(this.x*this.y)}`);
    }
    // overlay
    overlay(r2){
        //Primero vamos a por los vertices del cuadrado que viene
        
    }
    // tenemos que comprobar la siguiente situación
    // .x----------x.....
    // .|..........|.....
    // .|......x---|----x
    // .x------|---x....|
    // ........x--------x
    // Se superponen si alguna de sus coordenadas están dentro de los límites
    // del otro rectángulo
}

let r1 = new Rectangle(5,9, 3,4);
let r2 = new Rectangle(3,4, 5,7);

r1.area()
r2.area()

// let area = r1.area();
// console.log(`area ${area}`)

// let isOverlay = r1.overlay(r2)
