var datoBooleano = true;
if (datoBooleano) {
    console.log("el valor es verdadero");
}
else {
    console.log("el valor es falso");
}
var interMiami = 11;
var fcDallas = 11;
var messi = 1;
var juegaMessi = true;
var palabras = "Me emocione al verlo a Messi";
function jugar(equipo1, equipo2, juegaMessi) {
    var motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log("Gana Inter Miami ".concat(motivo));
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
    if (equipo1 == equipo2)
        console.log("Empataron");
}
jugar(interMiami, fcDallas, juegaMessi);
