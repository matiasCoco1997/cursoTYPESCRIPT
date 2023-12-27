//la "T" nos permite modificar el tipo de dato que le estariamos enviando al ticket ya sea numero, string, boolean o cualquier otro tipo
class Sorteo <T>{
    private ticket ? : T;

    constructor ( private nombre:string ){

    }

    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}

let sorteo = new Sorteo<number> ("Matías");

sorteo.setTicket(123);

console.log(sorteo.sortear());
