type Persona = {
    nombre: string,
    apellido: string,
    edad: number,
    hobbies: string[],
    tomaMate? :boolean | null
}


let persona: Persona = {
    nombre: "Matías",
    apellido: "Coco",
    edad: 26,
    hobbies: ['viajar', 'leer', 'ver peliculas'],
    tomaMate: true
}

let personaDos: Persona = {
    nombre: "Federico",
    apellido: "Pallares",
    edad: 32,
    hobbies: ['viajar', 'leer', 'jugar videojuegos']
}