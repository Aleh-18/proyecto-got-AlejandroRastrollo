import { Personaje } from "./Personaje.js";

export class Casa {

    #nombre;
    #lema;
    #miembros = [];
    
    constructor(nombre, lema){
        if (typeof nombre === "string") {
            this.#nombre = nombre;
        } else {
            console.log("El nombre debe ser un string");
        }

        if (typeof lema === "string") {
            this.#lema = lema;
        } else {
            console.log("El lema debe ser un string");
        }

        this.#miembros = [];
        console.log("Casa " + this.#nombre + " creada");
    }

    añadirMiembro(personaje){
        if (personaje instanceof Personaje) {
            this.#miembros.push(personaje);
            console.log("Miembro " + personaje.nombre + " añadido a la casa " + this.#nombre);
        } else {
            console.log("Solo se pueden añadir objetos tipo Personaje");
        }
    }

    quitarMiembro(personaje){
        if (personaje instanceof Personaje) {
            this.#miembros = this.#miembros.filter(m => m !== personaje);
            console.log("Miembro " + personaje.nombre + " eliminado de la casa " + this.#nombre);
        } else {
            console.log("Solo se pueden quitar objetos tipo Personaje");
        }
    }

    verMiembros(){
        console.log("Miembros de la casa " + this.#nombre + ":");
        if(this.#miembros.length>0){
            this.#miembros.forEach(miembro => {
                console.log(miembro.nombre);
            });
        }
        
    }

    // Getters && Setters
    
    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        if (typeof nombre === "string") {
            this.#nombre = nombre;
            console.log("Nombre de la casa cambiado a " + this.#nombre);
        } else {
            console.log("El nombre debe ser un string");
        }
    }
    
    get lema(){
        return this.#lema;
    }
    
    set lema(lema){
        if (typeof lema === "string") {
            this.#lema = lema;
            console.log("Nuevo lema de la casa " + this.#nombre + ": " + this.#lema);
        } else {
            console.log("El lema debe ser un string");
        }
    }

    get miembros(){
        return this.#miembros;
    }
}
