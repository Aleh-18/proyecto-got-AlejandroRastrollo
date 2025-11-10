import { Casa } from "../Clases/Casa.js";
import { Guerrero } from "../Clases/personajesEspeciales/Guerrero.js";


export class Batalla {
    #guerrerosFallecidos = [];
    #guerreroA;
    #guerreroB;

    iniciarBatalla(casaA, casaB) {
        if (!(casaA instanceof Casa) || !(casaB instanceof Casa)) {
            console.log("Solo se pueden enfrentar objetos de tipo Casa.");
            return;
        }else {
            let guerrerosCasaA = casaA.miembros.filter(personaje => personaje instanceof Guerrero);
            let guerrerosCasaB = casaB.miembros.filter(personaje => personaje instanceof Guerrero);
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
        
        }
    }

    mostrarGuerrerosFallecidos() {
        console.log("Guerreros fallecidos en la batalla:");
        this.#guerrerosFallecidos.forEach(guerrero => {
            console.log(guerrero.nombre);
        });
    }

}