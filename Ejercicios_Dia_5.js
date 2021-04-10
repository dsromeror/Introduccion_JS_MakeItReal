"use strict";

const ps = require("prompt-sync");
const prompt = ps();

//Ejercicio 23

let frase = prompt("Ingrese una frase: ");
console.log(frase.toUpperCase());

//Ejercicio 24

let fraseEjercicio24 = prompt("Ingrese una frase: ");
let contadorLetra = 0;
for (let i=0;i<fraseEjercicio24.length;i++){
    if (fraseEjercicio24[i] == 'a'){
        contadorLetra++;
    }
}
console.log(contadorLetra);

//Ejercicio 25

let str = prompt('Ingrese una frase: ')
str = str.toLowerCase()
str = str.replace(" ", "")
str = str.replace("a", "4")
str = str.replace("e", "3")
str = str.replace("i", "1")
str = str.replace("o", "0")
console.log(str);

//Ejercicio 26

let fraseE = prompt('Ingrese una frase: ')
console.log(fraseE.replace(/\b[a-z]/g,c=>c.toUpperCase()));

//Ejercicio 27

let fraseEjercicio27 = prompt("Ingrese una frase: ");
let fraseSplit = fraseEjercicio27.split(' ');
for (let i=0;i<fraseSplit.length;i++){
    console.log(fraseSplit[i]);
}

//Ejercicio 28

let fraseUno = prompt("Ingrese frase 1: ");
let fraseDos = prompt("Ingrese frase 2: ");
let arrComun = []

for(let i= 0;i<fraseUno.length;i++){        
    if(fraseDos.includes(fraseUno[i])){
      arrComun.push(fraseUno[i])
    }
}
console.log(arrComun.length>0?"Los caracteres en común son: "+arrComun:"No se encontraron caracteres en común")
