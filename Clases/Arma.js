export class Arma {

    #nombre;
    #daño;
    #tipo;

    constructor(nombre, daño, tipo){
        if (typeof nombre === "string") {
            this.#nombre = nombre;
        } else {
            console.log("El nombre debe ser un string");
            return;
        }

        if (typeof daño === "number") {
            this.#daño = daño;
        } else {
            console.log("El daño debe ser un número");
            return;
        }

        if (typeof tipo === "string") {
            this.#tipo = tipo;
        } else {
            console.log("El tipo debe ser un string");
            return;
        }

        console.log("Arma " + this.#nombre + " creada");
    }

    describirArma(){
        console.log(`Arma: ${this.#nombre}, Daño: ${this.#daño}, Tipo: ${this.#tipo}`);
    }

    // Getters && Setters

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        if (typeof nombre === "string") {
            this.#nombre = nombre;
            console.log("Nombre del arma cambiado a " + this.#nombre);
        } else {
            console.log("El nombre debe ser un string");
            return;
        }
    }

    get daño(){
        return this.#daño;
    }

    set daño(daño){
        if (typeof daño === "number") {
            this.#daño = daño;
            console.log("Daño de " + this.#nombre + " cambiado a " + this.#daño);
        } else {
            console.log("El daño debe ser un número");
            return;
        }
    }

    get tipo(){
        return this.#tipo;
    }

    set tipo(tipo){
        if (typeof tipo === "string") {
            this.#tipo = tipo;
            console.log("Tipo de " + this.#nombre + " cambiado a " + this.#tipo);
        } else {
            console.log("El tipo debe ser un string");
            return;
        }
    }
}
