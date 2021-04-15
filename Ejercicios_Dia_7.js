//Ejercicio 35

let pedro = {
    nombre : 'Pedro Perez',
    edad : 30,
    activo : true,
    hobbies : ['programar','squash','piano']
}

console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
console.log(pedro);

//Ejercicio 36

function saludar(persona) {
    let frase = "Hola "+ persona.nombre
  
    if (persona.edad) {
      frase += ", tienes " + persona.edad + " años"
    }
  
    return frase
  }

// código de prueba
const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log(saludar(juan)); // "Hola Juan"

//Ejercicio 37

function buscarProducto (array,numero){
    for (let obj of array){
        if (obj.id === numero){
            return obj;
        }
    }
    return null;
}

let productos = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
  ];
  console.log(buscarProducto(productos, 1)); // { id: 1, nombre: "A" }
  
productos = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
  ];
console.log(buscarProducto(productos, 566)); // null

//Ejercicio 38

function descifrar(str,obj){
    let newStr = '';
    
    for(let i of str){
        if (obj[i]){
            newStr+=obj[i];
        }else{
            newStr+=i;
        }
    }
    return newStr;
}

console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"

//Ejercicio 39

function frecuencias(str){
    let repeat = new Object();

    for (let i of str) {
        if (i != ' ') {
        if (repeat[i]) {
            repeat[i] += 1;
        }
        else {
            repeat[i] = 1;
        }
        }
    }
  return repeat
}

console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }

//Ejercicios 40

let persona = {
    peso     : 65,
    estatura : 1.8,
    bmi      : function() {
      return this.peso/(this.estatura ** 2)
    }
}

console.log(persona.bmi()); // 20.061728395061728