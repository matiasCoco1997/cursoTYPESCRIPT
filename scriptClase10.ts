class Pelicula {
    nombre? : string;
    protagonistas ? : string[];
    actores ? : string[];

    constructor(nombre:string, protagonistas:string[], actores:string[]) {
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    }

    proyectarEnCine(){
        console.log(`La pelicula "${this.nombre}" esta siendo proyectada`);
    }
}

const nombrePelicula = "Muchachos";
const protagonistas = ['Messi', 'Otamendi', 'Dibu Martinez'];
const actores = ['Messi', 'Otamendi', 'Dibu Martinez', 'Público'];

const peliculaUno = new Pelicula( nombrePelicula , protagonistas, actores);

peliculaUno.proyectarEnCine();