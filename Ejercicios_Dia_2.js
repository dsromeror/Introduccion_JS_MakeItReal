"use strict";

const ps = require("prompt-sync");
const prompt = ps();

/*Ejercicio 6.*/

let numero = parseInt(prompt("Ingrese un número: "));
if (numero>10){
    console.log("El número es mayor a 10");
}else{
    console.log("El número es menor o igual a 10")
}

/*Ejercicio 7*/

let numeroAleatorio = Math.floor(Math.random()* 10 + 1);
let numeroUsuario = parseInt(prompt("Ingrese un número: "));
numeroUsuario == numeroAleatorio ? console.log("Felicitaciones, ese era!") : console.log("Lo siento, intenta nuevamente!");

/*Ejercicio 8*/

let numeroEjercicioOcho = parseInt(prompt("Ingrese un número: "));
numeroEjercicioOcho%5 == 0 ? console.log("Si, el número x es múltiplo 5") : console.log("No, el número x no es múltiplo de 5");

/*Ejercicio 9*/

let numeroEjercicioNueve = parseInt(prompt("Ingrese un número: "));
if (numeroEjercicioNueve<10){
    console.log("El número es menor que 10");
}else if (numeroEjercicioNueve>10){
    console.log("El número es mayor que 10");
}else{
    console.log("El número es igual a 10");
}

/*Ejercicio 10*/

let peso = parseFloat(prompt("Ingrese su peso en Kg: "));
let estatura = parseFloat(prompt("Ingrese su estatura en metros: "));

let bmi = peso / estatura**2;
if (bmi<18.5){
    console.log("Bajo de peso");
}else if (18.5<bmi && bmi<24.9){
    console.log("Normal");
}else if (25<bmi && bmi<29.9){
    console.log("Sobrepeso");
}else{
    console.log("Obeso");
}

/*Ejercicio 11*/

let numeroEjercicioOnce = parseInt(prompt("Ingresa un número: "));
if (numeroEjercicioOnce%3 == 0 && numeroEjercicioOnce%5 ==0){
    console.log("bingbong");
}else if (numeroEjercicioOnce%3 == 0){
    console.log("bing");
}else if (numeroEjercicioOnce%5 == 0){
    console.log("bong");
}else{
    console.log(numeroEjercicioOnce);
}