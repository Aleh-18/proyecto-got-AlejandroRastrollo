import { Personaje } from "../Personaje.js";

export class Consejero extends Personaje{
    #especialidad;

    constructor(nombre,edadAnios,casa,especialidad){
        super(nombre,edadAnios,casa);
        if(typeof especialidad == "string"){
            this.#especialidad = especialidad
        }else{
            console.log("La especialidad debe ser un string");
            return;
        }
    }

    luchar(){
        console.log("El consejero no lucha con palabras, sino con palabras e inteligencia.");
    }

    aconsejar(){
        console.log(this.nombre + "dice: se cree el ladron que todos son de su condicion");
    }
}