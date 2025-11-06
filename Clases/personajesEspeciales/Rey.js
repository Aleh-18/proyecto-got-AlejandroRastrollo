import { Personaje } from "../Personaje.js";

export class Rey extends Personaje {
    #aniosGobernando;
    
    constructor(nombre,edadAnio,casa,aniosGobernando){
        super(nombre,edadAnio, casa);
        if(typeof aniosGobernando == "number"){
            this.#aniosGobernando = aniosGobernando;
        }else{
            console.log("Los años gobernando deben ser un número");
            return;
        }
    }

    luchar(){
        console.log("El rey no lucha, pues gobierna desde su trono.");
    }

    gobernar(){
        console.log(this.nombre + " ha gobernado por " + this.#aniosGobernando + " años.");
    }
}