import { Casa } from "./Casa.js";

export class Personaje {
    
    #nombre;
    #edadAnios;
    #fallecido;
    #casa;

    constructor(nombre, edadAnios, casa){
        if (typeof nombre === "string") {
            this.#nombre = nombre;
        } else {
            console.log("El nombre debe ser un string");
        }

        if (typeof edadAnios === "number") {
            this.#edadAnios = edadAnios;
        } else {
            console.log("La edad debe ser un número");
        }

        if (casa instanceof Casa) {
            this.#casa = casa;
        } else {
            console.log("La casa debe ser tipo Casa");
        }

        this.#fallecido = false;
        console.log("Personaje " + this.#nombre + " creado");
    }

    presentarse(){
        console.log("Soy " + this.#nombre + " de la casa " + this.#casa.nombre);
    }

    suicidarse(){
        this.#fallecido = true;
        console.log(this.#nombre + " se ha suicidado");
    }

    // Getters && Setters

    get nombre(){
        return this.#nombre;
    }
   
    set nombre(nombre){
        if (typeof nombre === "string") {
            this.#nombre = nombre;
            console.log("Nombre del personaje cambiado a " + this.#nombre);
        } else {
            console.log("El nombre debe ser un string");
        }
    }
   
    get edadAnios(){
        return this.#edadAnios;
    }
   
    set edadAnios(edadAnios){
        if (typeof edadAnios === "number") {
            this.#edadAnios = edadAnios;
            console.log("Edad de " + this.#nombre + " actualizada a " + this.#edadAnios);
        } else {
            console.log("La edad debe ser un número");
        }
    }
   
    get fallecido(){
        return this.#fallecido;
    }
   
    set fallecido(valor){
        if (typeof valor === "boolean") {
            this.#fallecido = valor;
            console.log(this.#nombre + " fallecido= " + valor);
        } else {
            console.log("Valor no válido, debe ser booleano");
        }
    }
   
    get casa(){
        return this.#casa;
    }
   
    set casa(casa){
        if (casa instanceof Casa) {
            this.#casa = casa;
            console.log(this.#nombre + " ahora pertenece a la casa " + casa.nombre);
        } else {
            console.log("La casa debe ser tipo Casa");
        }
    }
}
