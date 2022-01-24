import { Punto } from "./punto";
import { Triangulo } from "./triangulo"

let punto1:Punto = new Punto(5,6);

console.log(punto1.getX());
console.log(punto1.getY());
punto1.toString();
let punto2:Punto = new Punto(0,4);
console.log(punto1.calcularDistancia(punto2));
console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularCuadrante());


let punto3:Punto = new Punto(4,2);
let triangulo:Triangulo = new Triangulo(punto1, punto2, punto3);

console.log(triangulo.calcularLongitudLados());
