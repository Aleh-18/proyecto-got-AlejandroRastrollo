import { Personaje } from "../Personaje.js";
import { Arma } from "../Arma.js";

export class Guerrero extends Personaje {
    #arma;
   
    constructor(nombre,edadAnios, casa,arma ){
        super(nombre,edadAnios,casa);
        if(arma instanceof Arma){
            this.#arma = arma;
        }else{
            console.log("El arma debe ser un objeto tipo Arma");
            return;
        }
        
    }

    luchar() {
        console.log(this.nombre + " ataca con su " + this.#arma.nombre+ "haciendo " + this.#arma.daño + " de daño.");
    }

    entrenar() {
        console.log(this.nombre + " está entrenando para mejorar sus habilidades de combate.");
    }

}