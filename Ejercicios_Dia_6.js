//Ejercicio 29

let suma = (a,b) => a+b;

console.log(suma(1, 2)) // 3
console.log(suma(0, 0)) // 0
console.log(suma(245, 923)) // 1168

//Ejercicio 30

let hola = texto => 'Hola ' + texto + "!";

console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"

//Ejercicio 31

let bmi = (peso, altura) => peso / altura**2;

console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695

//Ejercicio 32

let calcularColor = numero => {
    if (numero == 1) {
        return 'El color es negro';
    }else if (numero == 2){
        return 'El color es blanco';
    }else if (numero == 3){
        return 'El color es azul';
    }else{
        return 'El color es verde';
    }
}

console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"

//Ejercicio 33

let capitalizar = cadena => {
    return cadena.replace(/\b[a-z]/g,c=>c.toUpperCase());
}

console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"

//Ejercicio 34

let promedio = array => {
    let contador = 0;
    for (let i= 0;i<array.length;i++){
        contador += array[i];
    }
    return contador/array.length;
}

console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200