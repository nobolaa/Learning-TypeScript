function greet(name: string): void{
    console.log(`Hola, ${name}!!`);
}

function getNumber(): number{
    return Math.floor(Math.random() * 100);
}

function printPosition(position: {lat: number, long: number}){
    console.log(`Latitude & Longitude are: LAT ${position.lat} - LONG ${position.long}`);
}

function printPosition1(position: {lat: number, long: number|string}){
    console.log(`Latitude & Longitude are: LAT ${position.lat} - LONG ${position.long}`);
}

function printPosition2(position: {lat: number, long?: number} = {lat: 0}){
    console.log(`Latitude & Longitude are: LAT ${position.lat} - LONG ${position.long}`);
}

function printPosition3(position: {lat: number, long?: number} = {lat: 5, long: 10}){
    console.log(`Latitude & Longitude are: LAT ${position.lat} - LONG ${position.long}`);
}

greet('Nabil');
console.log(getNumber());
printPosition({lat: 5, long: 10});
printPosition1({lat: 5,long: '100'});
printPosition2({lat: 5});
printPosition3();