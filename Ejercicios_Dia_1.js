"use strict";

const ps = require("prompt-sync");
const prompt = ps();

/*Ejercicio 1*/

let mensaje = prompt("Ingresa un mensaje: ");
console.log(mensaje);

/*Ejercicio 2*/

let nombre = prompt("¿Cual es tu nombre?");
console.log("Hola " + nombre + "!");

/*Ejercicio 3*/

let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));

console.log ("La suma de los números es: " +  (numero1 + numero2));

/*Ejercicio 4*/

let nacimiento = parseInt(prompt("Digite su año de nacimiento: "));
let edad = 2021 - nacimiento;
console.log("Tienes " + edad + " años");

/*Ejercicio 5*/

let peso = parseFloat(prompt("Ingrese su peso en Kg: "));
let estatura = parseFloat(prompt("Ingrese su estatura en metros: "));

let bmi = peso / estatura**2;
console.log("Tu BMI es " + bmi);