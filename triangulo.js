"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var lado1 = Math.sqrt(Math.pow(this.vertice1.getX() - this.vertice2.getX(), 2) + Math.pow(this.vertice1.getY() - this.vertice2.getY(), 2));
        var lado2 = Math.sqrt(Math.pow(this.vertice2.getX() - this.vertice3.getX(), 2) + Math.pow(this.vertice2.getY() - this.vertice3.getY(), 2));
        var lado3 = Math.sqrt(Math.pow(this.vertice3.getX() - this.vertice1.getX(), 2) + Math.pow(this.vertice3.getY() - this.vertice1.getY(), 2));
        var lados = [lado1, lado2, lado3];
        return lados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
