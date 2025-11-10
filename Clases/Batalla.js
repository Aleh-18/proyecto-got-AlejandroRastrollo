import { Casa } from "../Clases/Casa.js";
import { Guerrero } from "../Clases/personajesEspeciales/Guerrero.js";

export class Batalla {
    #guerrerosFallecidos = [];
    #guerrerosVivos = [];
    #guerreroA;
    #guerreroB;

    iniciarBatalla(casaA, casaB) {
        if (!(casaA instanceof Casa) || !(casaB instanceof Casa)) {
            console.log("Solo se pueden enfrentar objetos de tipo Casa.");
            return;
        }

        let guerrerosCasaA = casaA.miembros.filter(personaje => personaje instanceof Guerrero && !personaje.fallecido);
        let guerrerosCasaB = casaB.miembros.filter(personaje => personaje instanceof Guerrero && !personaje.fallecido);

        console.log(`La batalla entre ${casaA.nombre} y ${casaB.nombre} ha comenzado!`);

        while (guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0) {
            this.#guerreroA = guerrerosCasaA[0];
            this.#guerreroB = guerrerosCasaB[0];

            this.#guerreroA.atacar(this.#guerreroB);
            if (this.#guerreroB.vida <= 0) {
                this.#guerreroB.fallecido = true;
                this.#guerrerosFallecidos.push(this.#guerreroB);
                guerrerosCasaB.splice(0, 1);
            }

            this.#guerreroB.atacar(this.#guerreroA);
            if (this.#guerreroA.vida <= 0) {
                this.#guerreroA.fallecido = true;
                this.#guerrerosFallecidos.push(this.#guerreroA);
                guerrerosCasaA.splice(0, 1);
            }
        }

        if (guerrerosCasaA.length > 0) {
            this.#guerrerosVivos.push(...guerrerosCasaA);
            console.log(`${casaA.nombre} ha ganado la batalla!`);
        } else {
            this.#guerrerosVivos.push(...guerrerosCasaB);
            console.log(`${casaB.nombre} ha ganado la batalla!`);
        }
    }

    mostrarGuerrerosFallecidos() {
        console.log("Guerreros fallecidos en la batalla:");
        this.#guerrerosFallecidos.forEach(guerrero => {
            console.log(guerrero.nombre);
        });
    }

    mostrarGuerrerosVivos(){
        console.log("Guerreros vivos después de la batalla:");
        this.#guerrerosVivos.forEach(guerrero => {
            console.log(guerrero.nombre);
        });
    }
}
