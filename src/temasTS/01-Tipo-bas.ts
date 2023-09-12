/// Tipos de datos - Crear variables de 3 Formas
var num1=23; //Ya no se usa
let num2=34; //Trabajaremos con let
const num3=22;


//Tipado de datos
//let nombre = 'Roberto'; //Si no se le establese [let nombre], 
//ANY se convierte cualquier tipo de dato que puede tener (No recomendado)

//Se hace de esta forma
//Hay 3 tipos basicos
let nombre:string;
let num:number;
let activo:boolean;


//let matricula:number;
let matricula:number|string|boolean;

//Alfanumerica
matricula=986553;
matricula='8797yshs'
matricula=true;

console.log(matricula);

//let num1=56;
