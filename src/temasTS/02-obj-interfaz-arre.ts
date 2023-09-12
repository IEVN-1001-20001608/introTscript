//let num2 =34; //Ya existe por eso marca 2, asi que hay que tener variables con nombres distintos


//objeto
//hay clases mas simples llamadas interfaces
//Como crear un objeto

interface Alumno{ //por buenas practicas se pone una 'I'al inicio
    matricula?:number; //'?' Se le agrega para que sea opccional 
    nombre:string;
    edad:number;
    email:string;
} 
//se cumple las caracteristicas de lenguale

const alumno:Alumno={
    //Se tenia que poner string, pero no se puede así que se crea una interfaz.
    nombre: 'roberto',
    edad: 35,
    email: 'rcardiel@gmail.com',
}

//console.log(alumno);
console.table(alumno);//Para tabla
//Eso para interfaz y objetos

let mascotas=['perro','gato','perico'];//Arreglo con tres valores
//let mascotas:string=['perro','gato','perico'];//se tiene que definir cada uno
mascotas[1]='Nuevo gato';
//Funciones asociadas a él.
mascotas.push()
console.log(mascotas); //Imprimir el arreglo

//Arreglos que permiten tener diferentes tipos de datos.
let tem:(number|string)[]=[] //Corchetes define el vacio.
//Se define este arreglo que admite numeros y strings
tem.push(11);
tem.push('Nombre');
console.log(tem);