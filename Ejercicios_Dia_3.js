"use strict";

const ps = require("prompt-sync");
const prompt = ps();

//Ejercicio 12

let frase = prompt("Ingrese una frase: ");
for (let i=0;i<10;i++){
    console.log(frase);
}

//Ejercicio 13

let fraseEjercicioTrece = prompt("Ingrese una frase: ");
let numero = parseInt(prompt("Ingrese un número: "));

for (let i=0;i<numero;i++){
    console.log(fraseEjercicioTrece);
}

//Ejercicio 14

let numeroEjercicioCatorce = parseInt(prompt("Ingrese un número: "));

for (let i=1; i<=numeroEjercicioCatorce;i++){
    console.log(i);
}

//Ejercicio 15

let numeroEjercicioQuince = parseInt(prompt("Ingrese un número: "));
let acumulador = 0;
for (let i=1;i<=numeroEjercicioQuince;i++){
    acumulador+=i;
}
console.log(acumulador);

//Ejercicio 16

let numeroUno = parseInt(prompt("Ingrese el primer número: "));
let numeroDos = parseInt(prompt("Ingrese el primer número: "));

for(let i=numeroUno;i<=numeroDos;i++){
    console.log(i);
}

//Ejercicio 17

let numeroUsuario = parseInt(prompt("Ingrese un número: "));
let numeroAleatorio = Math.floor(Math.random()* 10 + 1);

labelNumero: while (true){
    if (numeroUsuario != numeroAleatorio){
        numeroUsuario = parseInt(prompt("Ingrese un número: "));
    }else{
        console.log("Adivinaste el número");
        break labelNumero;
    }
}