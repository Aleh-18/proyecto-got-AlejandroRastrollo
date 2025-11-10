import { Casa } from "./Casa.js";
import { Rey } from "./personajesEspeciales/Rey.js";

export class Reino {

    #nombre;
    #casas;
    #rey;

    constructor(nombre, rey){
        if (typeof nombre === "string") {
            this.#nombre = nombre;
        } else {
            console.log("El nombre debe ser un string");
            return;
        }

        if (rey instanceof Rey) {
            this.#rey = rey;
        } else {
            console.log("El rey debe ser tipo Rey");
            return;
        }

        this.#casas = [];
        console.log("Reino " + this.#nombre + " creado con rey " + (rey?.nombre || "desconocido"));
    }

    agregarCasa(casa){
        if (casa instanceof Casa) {
            this.#casas.push(casa);
            console.log("Casa " + casa.nombre + " añadida al reino " + this.#nombre);
        } else {
            console.log("Solo se pueden agregar objetos tipo Casa");
            return;
        }
    }
    
    quitarCasa(casa){
        if (casa instanceof Casa) {
            this.#casas = this.#casas.filter(casadereino => casadereino !== casa);
            console.log("Casa " + casa.nombre + " eliminada del reino " + this.#nombre);
        } else {
            console.log("Solo se pueden quitar objetos tipo Casa");
            return;
        }
    }

    listarCasas(){
        console.log("Casas del reino " + this.#nombre + ":");
        this.#casas.forEach(casa => {
            console.log(casa.nombre);
        });
    }
    
    informacionRey(){
        console.log("Rey del reino " + this.#nombre + ":");
        console.log(this.#rey.nombre + (this.#rey.fallecido ? " (fallecido)" : ""));
    }

    // Getters && Setters

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (typeof nombre === "string") {
            this.#nombre = nombre;
            console.log("Nombre del reino cambiado a " + this.#nombre);
        } else {
            console.log("El nombre debe ser un string");
            return;
        }
    }

    get rey() {
        return this.#rey;
    }

    set rey(rey) {
        if (rey instanceof Rey) {
            this.#rey = rey;
            console.log("Nuevo rey del reino " + this.#nombre + ": " + rey.nombre);
        } else {
            console.log("El rey debe ser tipo Rey");
            return;
        }
    }

    get casas() {
        return this.#casas;
    }
}
