interface Humano {
    nombre: string,
    apellido: string,
    edad: number,
    hobbies: string[],
    tomaMate? :boolean | null
}

let humanoUno : Humano = {
    nombre: "Matías",
    apellido: "Coco",
    edad: 26,
    hobbies: ['viajar', 'leer', 'ver peliculas'],
    tomaMate: true
}

let humanoDos : Humano = {
    nombre: "Rocio",
    apellido: "Pallares",
    edad: 26,
    hobbies: ['viajar', 'leer', 'dormir']
}

function enviarPresentacion ( humano : Humano ){
    console.log(`Esta carta de presentacion es de: ${humano.nombre}`)
}

enviarPresentacion(humanoDos)