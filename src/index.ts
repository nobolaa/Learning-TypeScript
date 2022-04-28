let myTypeString: string = 'Hello world!';
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;

let arrNumber : number[] = [1, 2, 3];
let arrStrings : string[] = ['Uno', "Dos"];

let arrAny : any[] = ['Hola', 33, false];

let tuplePlayer: [string, number, boolean] = ['Doncic', 2, true];

let players: [number, string][];

players = [
    [1, 'Lebron'],
    [2, 'Durant'],
    [3, 'Carry']
];

let myUnion: string | number | null;
myUnion = 'hola';
myUnion = '33';
myUnion = null;