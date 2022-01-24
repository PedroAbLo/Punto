"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(coordenadaX, coordenadaY) {
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
    }
    Punto.prototype.getX = function () {
        return this.coordenadaX;
    };
    Punto.prototype.setX = function (coordenadaX) {
        this.coordenadaX = coordenadaX;
    };
    Punto.prototype.getY = function () {
        return this.coordenadaY;
    };
    Punto.prototype.setY = function (coordenadaY) {
        this.coordenadaY = coordenadaY;
    };
    Punto.prototype.toString = function () {
        console.log("(".concat(this.coordenadaX, ",").concat(this.coordenadaY, ")"));
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = Math.sqrt(Math.pow(this.getX(), 2) + Math.pow(this.getY(), 2));
        return distancia;
    };
    Punto.prototype.calcularDistancia = function (punto) {
        var distancia = Math.sqrt(Math.pow(this.getX() - punto.getX(), 2) + Math.pow(this.getY() - punto.getY(), 2));
        return distancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.getX() == 0 || this.getY() == 0) {
            return 0;
        }
        else if (this.getX() > 0 && this.getY() > 0) {
            return 1;
        }
        else if (this.getX() < 0 && this.getY() > 0) {
            return 2;
        }
        else if (this.getX() < 0 && this.getY() < 0) {
            return 3;
        }
        else if (this.getX() > 0 && this.getY() < 0) {
            return 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var distancia = [];
        for (var i = 0; i < puntos.length; i++) {
            distancia[i] = Math.sqrt(Math.pow(puntos[i].getX() - puntos[i].getY(), 2) + Math.pow(puntos[i].getX() - puntos[i].getY(), 2));
        }
        var mayor = 0;
        var posicion = 0;
        for (var j = 0; j < distancia.length; j++) {
            if (distancia[j] > mayor) {
                mayor = distancia[j];
                posicion = j;
            }
        }
        return puntos[posicion];
    };
    return Punto;
}());
exports.Punto = Punto;
