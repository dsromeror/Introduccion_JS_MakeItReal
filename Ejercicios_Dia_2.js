"use strict";

const ps = require("prompt-sync");
const prompt = ps();
/*Ejercicio 6

Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.
Si es mayor debe imprimir "El número es mayor a 10".
Si es menor debe imprimir "El número es menor o igual a 10".
Comparte tu respuesta en este enlace.*/
let numero = parseInt(prompt("Ingrese un número: "));
if (numero>10){
    console.log("El número es mayor a 10");
}else{
    console.log("El número es menor o igual a 10")
}
/*Ejercicio 7

Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. 
Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir 
"Lo siento, intenta nuevamente!"

Comparte tu respuesta en este enlace.*/
let numeroAleatorio = Math.floor(Math.random()* 10 + 1);
let numeroUsuario = parseInt(prompt("Ingrese un número: "));
numeroUsuario == numeroAleatorio ? console.log("Felicitaciones, ese era!") : console.log("Lo siento, intenta nuevamente!");

/*Ejercicio 8

Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. 
son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.
Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".

Comparte tu respuesta en este enlace.*/
let numeroEjercicioOcho = parseInt(prompt("Ingrese un número: "));
numeroEjercicioOcho%5 == 0 ? console.log("Si, el número x es múltiplo 5") : console.log("No, el número x no es múltiplo de 5");

/*Ejercicio 9

Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.
Si el número es menor a 10 debe imprimir "El número es menor que 10".
Si el número es mayor a 10 debe imprimir "El número es mayor que 10".
Si el número es igual a 10 debe imprimir "El número es igual a 10".
Comparte tu respuesta en este enlace.*/

let numeroEjercicioNueve = parseInt(prompt("Ingrese un número: "));
if (numeroEjercicioNueve<10){
    console.log("El número es menor que 10");
}else if (numeroEjercicioNueve>10){
    console.log("El número es mayor que 10");
}else{
    console.log("El número es igual a 10");
}

/*Ejercicio 10

El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

    "Bajo de peso" si el BMI < 18.5
    "Normal" si está entre 18.5 y 24.9
    "Sobrepeso" si está entre 25 y 29.9
    "Obeso" si es igual o mayor a 30

Comparte tu respuesta en este enlace.*/

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

/*Ejercicio 11

Escribe un programa que le pida al usuario ingresar un número.

    Si el número es múltiplo de 3 debe imprimir en la consola "bing".
    Si el número es múltiplo de 5 debe imprimir en la consola "bong".
    Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
    Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

Comparte tu respuesta en este enlace.*/

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