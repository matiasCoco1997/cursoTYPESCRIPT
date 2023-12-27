let datoBooleano: boolean = true

if(datoBooleano){
    console.log("el valor es verdadero")
} else{
    console.log("el valor es falso")
}

let interMiami:number | null | undefined = 11
let fcDallas:number = 11
let messi: number = 1
let juegaMessi: boolean = true

let palabras:string = "Me emocione al verlo a Messi"

function jugar (equipo1:number, equipo2:number, juegaMessi:boolean ) : void {
    
    let motivo: string = ""

    if(juegaMessi){
        equipo1 += messi
        motivo = " porque juega Messi"
    } 

    if( equipo1 > equipo2 ) console.log(`Gana Inter Miami ${motivo}`)

    if( equipo1 < equipo2 ) console.log("Gana FC Dallas")

    if( equipo1 == equipo2 ) console.log("Empataron")

}

jugar(interMiami, fcDallas, juegaMessi);