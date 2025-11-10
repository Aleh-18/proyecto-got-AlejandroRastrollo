import { Casa } from "./Clases/Casa.js";
import { Personaje } from "./Clases/Personaje.js";
import { Arma } from "./Clases/Arma.js";
import { Reino } from "./Clases/Reino.js";
import { Rey } from "./Clases/personajesEspeciales/Rey.js";

// --- Crear casas ---
let casaPHP = new Casa("CasaPHP","Borren PHP");
let casaJS = new Casa("CasaJS","Siempre JS");

// --- Crear personajes ---
let reyVictor = new Rey ("Victor",19,casaPHP, 999);
let vagabundoAlberto = new Personaje("Alberto",25,casaJS);
let panaderoJavi = new Personaje("Javi",30,casaPHP);

// --- Añadir miembros a las casas ---
casaPHP.añadirMiembro(reyVictor);
casaPHP.añadirMiembro(panaderoJavi);
casaJS.añadirMiembro(vagabundoAlberto);

// --- Crear armas ---
let espada = new Arma("Espada",50,"Cuerpo a cuerpo");
let arco = new Arma("Arco",30,"Distancia");
let lanza = new Arma("Lanza",40,"Cuerpo a cuerpo");

// --- Crear reino ---
let reinoKiko = new Reino("El reino de Kiko", reyVictor);

// --- Agregar casas al reino ---
reinoKiko.agregarCasa(casaPHP);
reinoKiko.agregarCasa(casaJS);

// --- Usar métodos de las clases ---

// Listar casas del reino
reinoKiko.listarCasas();

// Mostrar información del rey
reinoKiko.informacionRey();

// Ver miembros de cada casa
casaPHP.verMiembros();
casaJS.verMiembros();

// Quitar un miembro y volver a ver
casaPHP.quitarMiembro(panaderoJavi);
casaPHP.verMiembros();

//setters
reyVictor.nombre = "Victor II";
casaJS.lema = "JS por siempre";

// Probar método de suicidio
vagabundoAlberto.suicidarse();

// Quitar una casa del reino
reinoKiko.quitarCasa(casaJS);
reinoKiko.listarCasas();

//setters
console.log("Nombre del reino: "+reinoKiko.nombre);
reinoKiko.nombre = "Reino Supremo de Kiko";
console.log("Nuevo nombre del reino: " + reinoKiko.nombre);
