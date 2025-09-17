//Ejercicio 1
let nombre="Valery";
let edad=17;
let programacion=true;
console.log(`Nombre: ${nombre}, Edad: ${edad}, le gusta programar: ${programacion}`);

//Ejercicio 2
let ciudad="Bogota";
ciudad="Medellin";

const pais="Colombia";
//pais="Argentina"; -> error no se puede cambiar el valor de const una vez definido

var color="Negro";

{
    color="Rojo"
}
console.log(color);
//let tiene alcance de bloque y var tiene alcance global


//Ejercicio 3
let numero=45;
if(numero>=18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad")
}

//Ejercicio 4
let dia="sabado";
switch(dia.toLowerCase()){
    case "lunes":
        console.log("Es lunes inicio de semana")
        break;
    case "viernes":
        console.log("Es viernes casi fin de semana");
        break;
    case "sabado":
    case "domingo":
        console.log("Es sabado o domingo, fin de semana ")
        break;
    
    default:
        console.log("Es un dia entre semana");
        
}

//Ejercicio 5
for(let i=1;i<=10;i++){
    console.log(i);
}

//ejercicio 6
const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite un numero: ", (num)=>{
    let i=0;
    while(i<num){
        console.log("Hola")
        i++;
    }
    rl.close();
});