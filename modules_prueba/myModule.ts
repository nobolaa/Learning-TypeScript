export const PI = 3.14;

export interface Personita {
    id: number;
    name: string;
}

export function generarRandomNumero(): number{
    return Math.floor(Math.random()*100);
}

//export { PI, Personita, generarRandomNumero }