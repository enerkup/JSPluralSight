
//Classes 

class Persona {
    constructor(name) {
        this.name =  name;
    }
    hi() {
        console.log(`Hi ${this.name}`);
    }
}

class Estudiante extends Persona {
    constructor(name,level) {
        super(name);
        this.level = level;
    }

    hi() {
        console.log(`Hi ${this.name} grade ${this.level}`);
    }

}

const p1 = new Persona("Jame");
const p2 = new Estudiante("Jina","Bech 02");

p1.hi = () => console.log('Salta saludo');

p1.hi();
p2.hi();
