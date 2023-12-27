"use strict";
let humanoUno = {
    nombre: "Matías",
    apellido: "Coco",
    edad: 26,
    hobbies: ['viajar', 'leer', 'ver peliculas'],
    tomaMate: true
};
let humanoDos = {
    nombre: "Rocio",
    apellido: "Pallares",
    edad: 26,
    hobbies: ['viajar', 'leer', 'dormir']
};
function enviarPresentacion(humano) {
    console.log(`Esta carta de presentacion es de: ${humano.nombre}`);
}
enviarPresentacion(humanoDos);
