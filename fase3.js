import { Casa } from './Clases/Casa.js';
import { Arma } from './Clases/Arma.js';
import { Guerrero } from './Clases/personajesEspeciales/Guerrero.js';
import { Rey } from './Clases/personajesEspeciales/Rey.js';
import { Consejero } from './Clases/personajesEspeciales/Consejero.js';
import { Batalla } from './Clases/Batalla.js';

const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

const garra = new Arma("Garra", 90, "Cuerpo a cuerpo");
const aguja = new Arma("Aguja", 70 , "Cuerpo a cuerpo");
const hacha = new Arma("Hacha del Norte", 80, "Cuerpo a cuerpo");
const espadaLarga = new Arma("Espada Larga", 85, "Cuerpo a cuerpo");
const ballesta = new Arma("Ballesta", 75 , "A distancia");
const filoRojo = new Arma("Filo Rojo", 88, "Cuerpo a cuerpo");
const lanzaDeCaza = new Arma("Lanza de Caza", 60, "Cuerpo a cuerpo");

// === GUERREROS DE LA CASA STARK ===
// Formato: Guerrero(nombre, edad, casa, arma, vivo=false)
const jon = new Guerrero("Jon Snow", 25, casaStark, garra, false);
const arya = new Guerrero("Arya Stark", 18, casaStark, aguja, false);
const robb = new Guerrero("Robb Stark", 22, casaStark, espadaLarga, false);
const brienne = new Guerrero("Brienne de Tarth", 30, casaStark, hacha, false);

// === GUERREROS DE LA CASA LANNISTER ===
const jaime = new Guerrero("Jaime Lannister", 32, casaLannister, filoRojo, false);
const cersei = new Guerrero("Cersei Lannister", 34, casaLannister, lanzaDeCaza, false);
const tyrion = new Guerrero("Tyrion Lannister", 30, casaLannister, ballesta, false);
const gregor = new Guerrero("Gregor Clegane", 38, casaLannister, hacha, false);

// === AÑADIR PERSONAJES A LAS CASAS ===
casaStark.añadirMiembro(jon);
casaStark.añadirMiembro(arya);
casaStark.añadirMiembro(robb);
casaStark.añadirMiembro(brienne);

casaLannister.añadirMiembro(jaime);
casaLannister.añadirMiembro(cersei);
casaLannister.añadirMiembro(tyrion);
casaLannister.añadirMiembro(gregor);

casaStark.verMiembros();
casaLannister.verMiembros();

const batallaBastardos = new Batalla();
batallaBastardos.iniciarBatalla(casaStark, casaLannister);

batallaBastardos.mostrarGuerrerosFallecidos();
batallaBastardos.mostrarGuerrerosVivos();