//Desestructuración objetos arreglos
//Descomponer
//tomar y hacr referencia a esos valores
interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles; //Definida por otra interfaz
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 66,
    cancion: 'Mañanitas',
    detalles: {
        autor:'Cepillin',
        year:1978,
    }
}
/*console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La canción es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`El año es: ${reproductor.detalles.year}`);*/

//Destructuración de objetos para solo ocupar la parte que quiero
const {volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La canción es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
//console.log(`El año es: ${reproductor.detalles.year}`);

const dbz:string[]=['Goku','Vegeta','Trunks','Yamcha'];
console.log(`Personaje 1:${dbz[0]}`);
console.log(`Personaje 2:${dbz[1]}`);
console.log(`Personaje 2:${dbz[2]}`);
console.log(`Personaje 2:${dbz[3]}`);
const[a,,,d]=dbz;

console.log(`Personaje 1: ${a}`);
console.log(`Personaje n: ${d}`);

