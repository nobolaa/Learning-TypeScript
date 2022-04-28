interface Person{
    id: number;
    name: string;
}

interface Employee extends Person{
    rol: string;
}


interface Product{
    id: number;
    name: string;
    price: number;
}

interface Items<T>{
    addItem(newItem: T): void;
}

//type dataType = Person | Employee | Product;
class DataCollection<T extends {id: number, name: string}> implements Items<T>{
    private items: T[] = [];

    addItem(newItem: T): void{
        this.items.push(newItem);
    }

    getItems(): void{
        console.log(`List of items`, JSON.stringify(this.items));
    }

    getNames(): string[]{
        return this.items.map((item: T) => item.name);
    }

    getItemById(id: number): T | undefined{
        return this.items.find((item: T) => item.id===id);
    }
}

const personCollection = new DataCollection<Person>();
const person: Person = {id: 1, name: 'Nabil'};
personCollection.addItem(person);
personCollection.getItems();

const employeeCollection = new DataCollection<Employee>();
const emnployee: Employee = {id: 1, name: 'Nabil', rol: 'Informatico'};
employeeCollection.addItem(emnployee);
employeeCollection.getItems();

const productCollection = new DataCollection<Product>();
const product: Product = {id: 1, name: 'Manzanas', price: 3.22};
productCollection.addItem(product);
productCollection.getItems();