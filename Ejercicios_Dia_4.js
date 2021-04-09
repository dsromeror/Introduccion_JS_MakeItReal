"use strict";

const ps = require("prompt-sync");
const prompt = ps();

//Ejercicio 18

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];
let nombreUsuarioUno = prompt("Ingrese un nombre: ");
let nombreUsuarioDos = prompt("Ingrese otro nombre: ");

nombres.push(nombreUsuarioUno);
nombres[2] = nombreUsuarioDos;
for(let i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}

//Ejercicio 19

let numeroUsuario = prompt("Ingrese un número: ");
let arrayNumeros = [];
for (let i=1;i<=numeroUsuario;i++){
    arrayNumeros.push(i);
}
arrayNumeros.splice(1,1);
for(let i=0;i<arrayNumeros.length;i++){
    console.log(arrayNumeros[i]);
}

//Ejercicio 20

const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
  ];

for (let i=0; i < mat.length; i++) {
    console.log('Grupo '+ (i+1) +':');
    for (let j=0; j < mat[i].length; j++) {
      console.log('  ' + mat[i][j])
    }
}

//Ejercicio 21

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];
let nuevoArray = [];
for (let i=0;i<nums.length;i++){
    if (nums[i]>10){
        nuevoArray.push(nums[i]);
    }
}
for(let i=0;i<nuevoArray.length;i++){
    console.log(nuevoArray[i]);
}

//Ejercicio 22

const nums2 = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
let contador = 0;
for (let i=0;i<nums2.length;i++){
    if (nums2[i]==1){
        contador++;
    }
}
console.log(contador);