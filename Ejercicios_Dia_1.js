"use strict";

const ps = require("prompt-sync");
const prompt = ps();
/*Ejercicio 1
Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() 
y para escribir en la consola debes utilizar el método console.log().
Comparte tu respuesta en este enlace.*/

let mensaje = prompt("Ingresa un mensaje: ");
console.log(mensaje);

/*Ejercicio 2

Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre 
y un signo de exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en 
la consola "Hola Pedro!". Comparte tu respuesta en este enlace*/

let nombre = prompt("¿Cual es tu nombre?");
console.log("Hola " + nombre + "!");

/*Ejercicio 3

Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, 
e imprima en la consola la suma de los dos números que ingresó el usuario. Comparte tu respuesta en este enlace*/

let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));

console.log ("La suma de los números es: " +  (numero1 + numero2));

/*Ejercicio 4

Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con 
la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa 
debe imprimir en la consola:
Tienes 20 años

Comparte tu respuesta en este enlace*/

let nacimiento = parseInt(prompt("Digite su año de nacimiento: "));
let edad = 2021 - nacimiento;
console.log("Tienes " + edad + " años");

/*Ejercicio 5

El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".
Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728".
Comparte tu respuesta en este enlace*/

let peso = parseFloat(prompt("Ingrese su peso en Kg: "));
let estatura = parseFloat(prompt("Ingrese su estatura en metros: "));

let bmi = peso / estatura**2;
console.log("Tu BMI es " + bmi);