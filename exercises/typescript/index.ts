//Boolean
let muted: boolean = true;
muted = false;

//Números
let age =6;
let numerador: number =42;
let denominador: number = age;
let resultado = numerador/denominador;

//String
let nombre : string ='Diego';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people : string []=[];
people = ["Isabel","Nicole", "Juan"];
//people.push("9000");

let peopleAndNumbers : Array<string | number>=[]
peopleAndNumbers.push('Diego');
peopleAndNumbers.push(5520);

//Enum
enum Color{
    Rojo="Rojo", 
    Verde="Verde",
    Azul="Azul",
}
let colorFavorito: Color=Color.Verde
console.log(`Mi color favorito es ${Color}`);

//Any
let comodin: any ="Joker";
comodin = {type:'Wildcard'};

//Object
let someObject: object={type:'Wildcard'};

//Funciones
function add (a:number,b:number):number{
    return a+b;
}
const sum = add(4,6);

function createAdder(a:number):(number)=>number{
    return function(b:number){
        return a+b;
    }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName:string, lastName:string ='Herrera'):string{
    return `${firstName} ${lastName}`;
}
const diego = fullName('Diego');
console.log(diego);
//interface
enum Color{
    Roje ="Rojo",
    Verdo ="Verde"
}
interface Rectangulo{
    ancho: number;
    alto:number;
    color?:Color;
}
let rect: Rectangulo={
    ancho:4,
    alto:6,
    color: Color.Roje,
}
function area(r: Rectangulo){
    return r.alto * r.ancho;
}
const areaRect =area(rect);
console.log(areaRect);

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}`:`Un rectangulo`;
};
console.log(rect.toString());
