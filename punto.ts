
export class Punto{

    public coordenadaX:number;
    public coordenadaY:number;

    constructor(coordenadaX:number, coordenadaY:number){

        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY; 
    }

    public getX():number{
        return this.coordenadaX;
    }
    public setX(coordenadaX:number):void{
        this.coordenadaX = coordenadaX;
    }

    public getY():number{
        return this.coordenadaY;
    }
    public setY(coordenadaY:number):void{
        this.coordenadaY = coordenadaY;
    }

    public toString(){
        console.log(`(${this.coordenadaX},${this.coordenadaY})`)
    }

    public distanciaAlOrigen():number{
        let distancia:number = Math.sqrt(Math.pow(this.getX(),2) + Math.pow(this.getY(),2));
        return distancia;
    }

    public calcularDistancia(punto:Punto):number{
        let distancia:number = Math.sqrt(Math.pow(this.getX()-punto.getX(),2) + Math.pow(this.getY()-punto.getY(),2));
        return distancia;
    }

    public calcularCuadrante():number{
        if(this.getX() == 0 || this.getY() == 0){
            return 0;
        }else if(this.getX() > 0 && this.getY() > 0){
            return 1;
        }else if(this.getX() < 0 && this.getY() > 0){
            return 2;
        }else if(this.getX() < 0 && this.getY() < 0){
            return 3;
        }else if(this.getX() > 0 && this.getY() < 0){
            return 4;
        }
    }

    public calcularMasCercano(puntos:Punto[]):Punto{

        let distancia:number[] = [];
        for(let i = 0; i < puntos.length; i++){
            distancia[i] = Math.sqrt(Math.pow(puntos[i].getX() - puntos[i].getY(),2) + Math.pow(puntos[i].getX() - puntos[i].getY(),2));
        }
        let mayor = 0;
        let posicion = 0;
        for(let j = 0; j < distancia.length; j++){
            if(distancia[j] > mayor){
                mayor = distancia[j];
                posicion = j;
            }
        }
        return puntos[posicion];
    }

}