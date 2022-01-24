import { Punto } from "./punto";

export class Triangulo{

    private vertice1:Punto;
    private vertice2:Punto;
    private vertice3:Punto;

    constructor(vertice1:Punto, vertice2:Punto, vertice3:Punto){
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }

    public calcularLongitudLados():number[]{
        let lado1:number = Math.sqrt(Math.pow(this.vertice1.getX()-this.vertice2.getX(),2) + Math.pow(this.vertice1.getY()-this.vertice2.getY(),2));
        let lado2:number = Math.sqrt(Math.pow(this.vertice2.getX()-this.vertice3.getX(),2) + Math.pow(this.vertice2.getY()-this.vertice3.getY(),2));
        let lado3:number = Math.sqrt(Math.pow(this.vertice3.getX()-this.vertice1.getX(),2) + Math.pow(this.vertice3.getY()-this.vertice1.getY(),2));

        let lados:number[]=[lado1,lado2,lado3];
        return lados;
    }
}