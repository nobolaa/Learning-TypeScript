class Empleado{
    private id: number;
    private name: string;
    private dept: string;

    constructor(id: number, name: string, dept: string){
        this.id = id;
        this.name = name;
        this.dept = dept;
    }

    showInfo(): void{
        console.log(`${this.name}`)
    }
}

const emp = new Empleado(1, 'Nabil', 'Informatica');
emp.showInfo();

class Empleado2{
    constructor(private id: number,private name: string,private dept: string){
    }

    showInfo(): void{
        console.log(`${this.name}`)
    }
}

const emp2 = new Empleado2(1, 'Nabil', 'Informatica');
emp2.showInfo();


class Persona{

    public zone = 'Caribean';
    protected city = 'Santo Domingo';
    private country = 'R.D';

    constructor(){}
    greet(): void{
        console.log(this.country);
    }
}

class Empleado3 extends Persona{
    constructor(private id: number,private name: string,private dept: string){
        super();
    }

    showInfo(): void{
        console.log(`${this.name}`);
        console.log(this.city);
    }
}

const emp3 = new Empleado3(1, 'Nabil', 'Informatica');
emp3.greet();
console.log(emp3.zone);
emp3.showInfo();


class Empleado4 extends Persona{
    constructor(private readonly id: number,private readonly name: string,private readonly dept: string){
        super();
    }

    showInfo(): void{
        console.log(`${this.name}`);
        console.log(this.city);
    }
}

abstract class Persona2{
    constructor(){}
    abstract greet(): void;
}

class Empleado5 extends Persona2{
    constructor(){
        super();
    }

    greet(){
        console.log('me implementaron');
    }
}
