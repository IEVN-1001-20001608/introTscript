

//Se crean funciones para trabajar con tipescrips
//function sumar():void{
//    console.log(4+6);
//} //no es bueno poner void

//(recibe):lo que regresa.
function sumar(a:number,b:number):number{ //cuando defines que tipo de dato voy aregresar, se escibe aquí
    return a+b; //Para que regrese algo
}

const resultado=sumar(4,6);

console.log(resultado);

//funciones que tienen y reciben parametros 
//funciones que tienen y no reciben 

function multiplicar(n1:number,otnum:number,base:number=3):number{
    let tem=n1*base;
    return tem;
}

console.log(multiplicar(3,5));//numeros posicionales n1=3 y otnum=5

//definir interfa
interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}
function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota.edad);
}

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad() {
        console.log('La edad es ', this.edad);
    },
}
calcular(nuevaMascota,3);