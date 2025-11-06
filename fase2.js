import { Consejero } from "./Clases/personajesEspeciales/Consejero.js";
import { Guerrero } from "./Clases/personajesEspeciales/Guerrero.js";
import { Rey } from "./Clases/personajesEspeciales/Rey.js";
import { Arma } from "./Clases/Arma.js";
import { Casa } from "./Clases/Casa.js";
import { Reino } from "./Clases/Reino.js";

let casaPaya = new Casa("Casa Paya", "Payos de corazon");

let reyRobert = new Rey("Robert", 40, casaPaya, 10);
let reinoSMR = new Reino("SMR", reyRobert);

let armaEspada = new Arma("Espada Larga", 50, "Cuerpo a cuerpo");
let guerreroJon = new Guerrero("Jon Snow", 25, casaPaya, armaEspada);

let consejeroVega = new Consejero("Vega", 45,casaPaya, "Barista");

reinoSMR.agregarCasa(casaPaya);


guerreroJon.luchar();
guerreroJon.entrenar();

consejeroVega.luchar();
consejeroVega.aconsejar();

reyRobert.luchar();
reyRobert.gobernar();
reyRobert.presentarse();

