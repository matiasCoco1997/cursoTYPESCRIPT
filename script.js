"use strict";
let datoBooleano = true;
if (datoBooleano) {
    console.log("el valor es verdadero");
}
else {
    console.log("el valor es falso");
}
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = "Me emocione al verlo a Messi";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
    if (equipo1 == equipo2)
        console.log("Empataron");
}
jugar(interMiami, fcDallas, juegaMessi);
