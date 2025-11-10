import { Personaje } from "../Personaje.js";
import { Arma } from "../Arma.js";

export class Guerrero extends Personaje {
    #arma;
    #vida;
   
    constructor(nombre, edadAnios, casa, arma, fallecido = false){
        super(nombre, edadAnios, casa,fallecido);
        if(arma instanceof Arma){
            this.#arma = arma;
            this.#vida = 100;
        } else {
            console.log("El arma debe ser un objeto tipo Arma");
            return;
        }
    }

    luchar() {
        console.log(this.nombre + " ataca con su " + this.#arma.nombre + " haciendo " + this.#arma.daño + " de daño.");
    }

    entrenar() {
        console.log(this.nombre + " está entrenando para mejorar sus habilidades de combate.");
    }

    recibirDaño(cantidad) {
        this.#vida -= cantidad;
        if(this.#vida < 0){
            this.#vida = 0;
            this.suicidarse();
        }
    }

    atacar(objetivo){
        const danio = Math.floor(this.#arma.daño * (0.7 + Math.random() * 0.6));
        console.log(this.nombre + " ataca a " + objetivo.nombre + " con " + this.#arma.nombre + " causando " + danio + " de daño.");
        objetivo.recibirDaño(danio);
    }

    // Getters && Setters

    get arma(){
        return this.#arma;
    }

    get vida(){
        return this.#vida;
    }

    set arma(arma){
        if(arma instanceof Arma){
            this.#arma = arma;
            console.log("Arma de " + this.nombre + " cambiada a " + this.#arma.nombre);
        } else {
            console.log("El arma debe ser un objeto tipo Arma");
            return;
        }
    }

    set vida(vida){
        if(typeof vida === "number" && vida >= 0){
            this.#vida = vida;
            console.log("Vida de " + this.nombre + " cambiada a " + this.#vida);
        } else {
            console.log("La vida debe ser un número mayor o igual a 0");
            return;
        }
    }
}
