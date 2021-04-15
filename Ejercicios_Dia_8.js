//Ejercicio 41

const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34];

arr.forEach(Element => console.log(Element));

//Ejercicio 42

function pares(array){
    return array.filter(currentValue => currentValue % 2 == 0);
}

console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []

//Ejercicio 43

function posPares(arr){
    return arr.filter(function(elem,i){      
        return (i % 2 ===0)
    })  
}

console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []

//Ejercicio 44

function multiplicar(arr, num){
    return arr.map(function(elem){
      return elem*num
    })
}

console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []

//Ejercicio 45

function productosBaratos(arr){
    const filtrado = arr.filter(function(elem){
      return elem.precio>=5 && elem.precio<=10
    })
    const arrNew = []  
    filtrado.forEach(function(elem){
    arrNew.push(elem.nombre)
    })
    return arrNew
}

let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
  ];
  console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]